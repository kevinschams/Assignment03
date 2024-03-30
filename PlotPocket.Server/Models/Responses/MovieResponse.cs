using System.Text.Json.Serialization;

namespace PlotPocket.Server.Models.Responses;

public class MovieResponse {
    /*
        TODO: 
        Define the model based on the response from the Movie endpoints from
        The Movie Database's API. Be sure to use the [JsonPropertyName("<property>")] attribue
        above each of your C# properties to ensure that the JSON maps properly to your objects.
    */
        [JsonPropertyName("dates")]
        public Dates Dates { get; set; }

        [JsonPropertyName("page")]
        public int Page { get; set; }

        [JsonPropertyName("results")]
        public List<Movie> Results { get; set; }

        [JsonPropertyName("total_pages")]
        public int TotalPages { get; set; }

        [JsonPropertyName("total_results")]
        public int TotalResults { get; set; }
}

public class Dates {
   /*
        TODO: 
        Define the model based on the response from the Movie endpoints from
        The Movie Database's API. Be sure to use the [JsonPropertyName("<property>")] attribue
        above each of your C# properties to ensure that the JSON maps properly to your objects.
    */
        [JsonPropertyName("maximum")]
        public string Maximum { get; set; }

        [JsonPropertyName("minimum")]
        public string Minimum { get; set; }
}

public class Movie : ApiMediaItem {
   /*
        TODO: 
        Define the model based on the response from the Movie endpoints from
        The Movie Database's API. Be sure to use the [JsonPropertyName("<property>")] attribue
        above each of your C# properties to ensure that the JSON maps properly to your objects.
    */
        [JsonPropertyName("adult")]
        public bool Adult { get; set; }

        [JsonPropertyName("backdrop_path")]
        public string BackdropPath { get; set; }

        [JsonPropertyName("genre_ids")]
        public List<int> GenreIds { get; set; }

        [JsonPropertyName("original_title")]
        public string OriginalTitle { get; set; }

        [JsonPropertyName("release_date")]
        public string ReleaseDate { get; set; }

        [JsonPropertyName("title")]
        public string Title { get; set; }

        [JsonPropertyName("video")]
        public bool Video { get; set; }
}