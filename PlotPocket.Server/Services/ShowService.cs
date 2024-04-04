using System.Data.Common;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using PlotPocket.Server.Data;
using PlotPocket.Server.Models.Dtos;
using PlotPocket.Server.Models.Responses;

namespace PlotPocket.Server.Services;

public class ShowService {
    /*
        TODO:
        Declare appropriate instance variables needed to:
            - Access the appsettings.json coniguration file so as to reach the
                TMDB property we created there.
    */
    private readonly IConfiguration _config; // Accesses appsettings.json
    private readonly string _secureBaseUrl; // Convenience variable
    private readonly string _posterPathImgSize; // Convenience variable

    public ShowService(IConfiguration config) {
        _config = config;
        _secureBaseUrl = _config.GetValue<string>("TMDB:Images:SecureBaseUrl") ?? "";
        _posterPathImgSize = _config.GetValue<string>("TMDB:Images:PosterSizes:Large") ?? "";
    }


    public ShowDto MediaItemToShowDto(ApiMediaItem mediaItem) {
        string? dateToParse = mediaItem switch {
            // Movie movie => movie.ReleaseDate,
            // TvShow tvShow => tvShow.FirstAirDate,
            Trending trendingShow => trendingShow.ReleaseDate ?? trendingShow.FirstAirDate,
            _ => null
        };

        var date = DateTime.TryParse(dateToParse, out DateTime parsedDate) ? parsedDate : (DateTime?)null;        
        
        string? title;
        if(mediaItem is Trending trendingMedia) {
            title = trendingMedia.MediaType == "movie" ? trendingMedia.Title : trendingMedia?.Name;

        } else {
            title = (mediaItem as Movie)?.Title ?? (mediaItem as TvShow)?.Name;
        }

        return new ShowDto {
            Id = mediaItem.Id,
            Type = mediaItem is Trending trendingItem ? trendingItem.MediaType : (mediaItem is Movie ? "Movie" : "TV Show"),
            Title = title,
            Date = date,
            PosterPath = $"{_secureBaseUrl}{_posterPathImgSize}{mediaItem.PosterPath}"
        };
    }

    public ShowDto MovieToShowDto(Movie movie) {
        return new ShowDto {
            Id = movie.Id,
            Type = "movie",
            Title = movie.Title,
            Date = DateTime.TryParse(movie.ReleaseDate, out DateTime parsedDate) ? parsedDate : (DateTime?)null,
            PosterPath = $"{_secureBaseUrl}{_posterPathImgSize}{movie.PosterPath}"
        };
    }

    public ShowDto TvShowToShowDto(TvShow tvShow) {
        return new ShowDto {
            Id = tvShow.Id,
            Type = "tv",
            Title = tvShow.Name,
            Date = DateTime.TryParse(tvShow.FirstAirDate, out DateTime parsedDate) ? parsedDate : (DateTime?)null,
            PosterPath = $"{_secureBaseUrl}{_posterPathImgSize}{tvShow.PosterPath}"
        };
    }


}
