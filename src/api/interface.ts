export interface MovieRequest {
  page: number;
  sort_by: "recent" | "popular" | "favorites";
  year: number | null;
}

export interface MovieResponse {
  page: number;
  results: Array<MovieInfo>;
  total_results: number;
  total_pages: number;
}

export interface MovieInfoResponse {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
  }>;
  production_countries: Array<{ iso_3166_1: number; name: string }>;
  release_date: Date;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<{ iso_639_1: number; name: string }>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieInfo {
  id: number;
  popularity: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
