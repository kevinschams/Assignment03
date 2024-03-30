using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PlotPocket.Server.Services;
using PlotPocket.Server.Models;
using PlotPocket.Server.Models.Dtos;
using PlotPocket.Server.Models.Responses;
using NuGet.Protocol.Core.Types;

namespace MyApp.Namespace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly TMDBService _tmdbService;
        private readonly ShowService _showService;

        public MoviesController(TMDBService tmdbService, ShowService showService)
        {
            _tmdbService = tmdbService;
            _showService = showService;
        }

        [HttpGet("now-playing")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetNowPlayingMovies()
        {
            MovieResponse nowPlayingMoviesResp = await _tmdbService.GetNowPlayingMoviesAsync();
            List<Movie> nowPlayingMovies = nowPlayingMoviesResp.Results;

            List<ShowDto> movieDtos = nowPlayingMovies.Select(movie => 
                                                                _showService.MovieToShowDto(movie)).ToList();
            return Ok(movieDtos);
        }



        [HttpGet("top-rated")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetTopRatedMovies()
        {
            MovieResponse nowPlayingMoviesResp = await _tmdbService.GetTopRatedMoviesAsync();
            List<Movie> nowPlayingMovies = nowPlayingMoviesResp.Results;

            List<ShowDto> movieDtos = nowPlayingMovies.Select(movie => 
                                                                _showService.MovieToShowDto(movie)).ToList();
            return Ok(movieDtos);
        }

        [HttpGet("popular")]
        public async Task<ActionResult<IEnumerable<ShowDto>>> GetPopularMovies()
        {
            MovieResponse nowPlayingMoviesResp = await _tmdbService.GetPopularMoviesAsync();
            List<Movie> nowPlayingMovies = nowPlayingMoviesResp.Results;

            List<ShowDto> movieDtos = nowPlayingMovies.Select(movie => 
                                                                _showService.MovieToShowDto(movie)).ToList();
            return Ok(movieDtos);
        }
    }
}
