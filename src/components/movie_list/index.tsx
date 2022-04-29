import { FunctionComponent } from "react";
import MovieCard from "../movie_card";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

interface MovieListProps {
  items: Array<MovieListItem>;
}

export interface MovieListItem {
  id: number;
  image: string | null;
  title: string;
  releaseDate: Date;
}

const MovieList: FunctionComponent<MovieListProps> = ({ items }) => {
  const navigate = useNavigate();
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={4}>
      {items.map((obj) => (
        <Grid key={obj.id} item xs={6} lg={3} xl={2}>
          <MovieCard
            key={obj.id}
            image={obj.image}
            title={obj.title}
            releaseDate={obj.releaseDate}
            onClick={() => navigate(`/movie/${obj.id}`)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
