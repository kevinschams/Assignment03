using System.Text.Json.Serialization;

namespace PlotPocket.Server.Models.Responses;

public class MovieResponse {

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

        [JsonPropertyName("maximum")]
        public string Maximum { get; set; }

        [JsonPropertyName("minimum")]
        public string Minimum { get; set; }
}

public class Movie : ApiMediaItem {

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