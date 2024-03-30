using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PlotPocket.Server.Services;
using PlotPocket.Server.Models;
using PlotPocket.Server.Models.Dtos;
using PlotPocket.Server.Models.Responses;

namespace MyApp.Namespace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TvShowsController : ControllerBase
    {
        private readonly TMDBService _tmdbService;
        private readonly ShowService _showService;

        public TvShowsController(TMDBService tmdbService, ShowService showService)
        {
            _tmdbService = tmdbService;
            _showService = showService;
        }

        [HttpGet("airing-today")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetAiringTodayTvShows()
        {
            TvShowResponse airingTodayTvShowsResp = await _tmdbService.GetAiringTodayTvShowsAsync();
            List<TvShow> airingTodayTvShows = airingTodayTvShowsResp.Results;

            List<ShowDto> tvShowDtos = airingTodayTvShows.Select(tvShow =>
                                                                _showService.TvShowToShowDto(tvShow)).ToList();
            return Ok(tvShowDtos);
        }

        [HttpGet("popular")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetPopularTvShows()
        {
            TvShowResponse popularTvShowsResp = await _tmdbService.GetPopularTvShowsAsync();
            List<TvShow> popularTvShows = popularTvShowsResp.Results;

            List<ShowDto> tvShowDtos = popularTvShows.Select(tvShow =>
                                                                _showService.TvShowToShowDto(tvShow)).ToList();
            return Ok(tvShowDtos);
        }

        [HttpGet("top-rated")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetTopRatedTvShows()
        {
            TvShowResponse topRatedTvShowsResp = await _tmdbService.GetTopRatedTvShowsAsync();
            List<TvShow> topRatedTvShows = topRatedTvShowsResp.Results;

            List<ShowDto> tvShowDtos = topRatedTvShows.Select(tvShow =>
                                                                _showService.TvShowToShowDto(tvShow)).ToList();
            return Ok(tvShowDtos);
        }
    }
}
