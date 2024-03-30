using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlotPocket.Server.Services;
using PlotPocket.Server.Models.Responses;
using PlotPocket.Server.Models.Dtos;

namespace PlotPocket.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrendingController : ControllerBase {
        private readonly TMDBService _tmdbService;
        private readonly ShowService _showService;

        public TrendingController(TMDBService tmdbService, ShowService showService) {
            _tmdbService = tmdbService;
            _showService = showService;
        }    

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetTrendingShows(){
            TrendingResponse trendingShowsResp = await _tmdbService.GetTrendingShowsAsync();
            List<Trending> trendingShows = trendingShowsResp.Results;

            List<ShowDto> showDtos = trendingShows.Select(show => 
                                                            _showService.MediaItemToShowDto(show))
                                                            .ToList();

            return Ok(showDtos);
        }


       [HttpGet("movies")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetTrendingMovies(){
            TrendingResponse trendingMoviesResp = await _tmdbService.GetTrendingMoviesAsync();
            List<Trending> trendingMovies = trendingMoviesResp.Results;

            List<ShowDto> movieDtos = trendingMovies.Select(movie => 
                                                            _showService.MediaItemToShowDto(movie))
                                                            .ToList();

            return Ok(movieDtos);
        }

        [HttpGet("tvshows")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetTrendingTvShows(){
            TrendingResponse trendingTvShowsResp = await _tmdbService.GetTrendingTvShowsAsync();
            List<Trending> trendingTvShows = trendingTvShowsResp.Results;

            List<ShowDto> tvShowDtos = trendingTvShows.Select(tvShow => 
                                                            _showService.MediaItemToShowDto(tvShow))
                                                            .ToList();

            return Ok(tvShowDtos);
        }
    }
}
