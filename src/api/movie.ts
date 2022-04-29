import axios from "./config";
import { MovieRequest, MovieResponse, MovieInfoResponse } from "./interface";

export const getMoviesList = async (
  req: MovieRequest
): Promise<MovieResponse> => {
  let filter: any = { primary_release_year: req.year };
  switch (req.sort_by) {
    case "recent":
      filter.sort_by = "release_date.desc";
      break;
    case "popular":
      filter.sort_by = "popularity.desc";
      break;
    default:
      break;
  }
  const response = await axios.get("/4/discover/movie", {
    params: {
      ...filter,
      page: req.page,
    },
  });
  return response.data;
};

export const getMoviesInfo = async (
  idMovie: number
): Promise<MovieInfoResponse> => {
  const response = await axios.get(`/3/movie/${idMovie}`);
  return response.data;
};
