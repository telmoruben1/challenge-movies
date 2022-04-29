import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import ContainerDetails from "./container_details";
import ContainerImage from "./container_image";
import ContainerSummary from "./container_summary";

export type Details = {
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
  original_title: string;
  runtime: number | null;
  vote_average: number;
  release_date: Date;
  overview: string | null;
  genres: Array<{ id: number; name: string }>;
};

interface MovieContentProps {
  details: Details;
}

const MovieContent: FunctionComponent<MovieContentProps> = ({ details }) => {
  return (
    <>
      <ContainerImage image={details.backdrop_path} />
      <Grid
        container
        justifyContent="center"
        style={{ height: "100%", width: "100%" }}
      >
        <Grid lg={10} item style={{ height: "60%" }}>
          <ContainerDetails information={details} />
        </Grid>
        <Grid item lg={10} mt={17}>
          <ContainerSummary summary={details.overview} />
        </Grid>
      </Grid>
    </>
  );
};

export default MovieContent;
