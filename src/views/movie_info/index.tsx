import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesInfo } from "../../api/movie";
import { errorToast } from "../../utils/toast";
import MovieContent, { Details } from "../../components/movie_content";

const MovieInfo: FunctionComponent = () => {
  const params = useParams();
  const idMovie = parseInt(params.id!);

  const [movieInformation, setMovieInformation] = useState<Details>();

  useEffect(() => {
    if (idMovie) {
      getMoviesInfo(idMovie)
        .then((data) => {
          const {
            id,
            poster_path,
            backdrop_path,
            original_title,
            runtime,
            vote_average,
            release_date,
            overview,
            genres,
          } = data;

          setMovieInformation({
            id,
            poster_path,
            backdrop_path,
            original_title,
            runtime,
            vote_average,
            release_date,
            overview,
            genres,
          });
        })
        .catch(() => {
          errorToast("Oops,something wasn't right");
        });
    }
  }, []);

  if (!movieInformation) return <></>;
  return <MovieContent details={movieInformation} />;
};

export default MovieInfo;
