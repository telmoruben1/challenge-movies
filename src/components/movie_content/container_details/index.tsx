import React, { FunctionComponent } from "react";
import { Grid, styled } from "@mui/material";
import imageNotFound from "../../../assets/notFoundImage.jpg";
import { Details } from "../index";
import ButtonMoviesFavorites from "../../../containers/button_movies_favorites";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ContainerTitles = styled("div")({
  marginLeft: "10px",
  ".containerPrimary": {
    ".title": {
      color: "white",
      fontSize: "xx-large",
      margin: "0",
    },
  },
});
const ContainerTime = styled("div")({
  display: "flex",
  marginTop: "15px",
  ".iconTime": {
    marginTop: "11px",
    fontSize: "26px",
    color: "white",
    marginRight: "15px",
  },
  ".title": {
    marginTop: "11px",
    fontSize: "25px",
    color: "white",
    margin: "0",
  },
});

const MyCardMedia = styled("img")({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Sentence = styled("span")({
  color: "#0d6efd",
  fontSize: "x-large",
  marginRight: "5px",
});

interface ContainerDetailsProps {
  information: Details;
}

const ContainerDetails: FunctionComponent<ContainerDetailsProps> = ({
  information,
}) => {
  return (
    <Grid container justifyContent="center" sx={{ height: "100%" }}>
      <Grid item xs={11} lg={8} xl={8} mt={12}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={5} lg={3} xl={3} sx={{ height: "80%" }}>
            <MyCardMedia
              src={
                information.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${information!
                      .poster_path!}`
                  : imageNotFound
              }
            />
          </Grid>

          <Grid item xs={6} lg={5} xl={5}>
            <Grid container justifyContent="flex-start">
              <ContainerTitles>
                <Grid container textAlign="start" mb={8}>
                  <Grid item md={10}>
                    <div className="containerPrimary">
                      <h3 className="title">{information.original_title}</h3>
                    </div>
                  </Grid>
                  <Grid item md={2} sx={{ alignSelf: "end" }}>
                    <ButtonMoviesFavorites
                      id={information.id}
                      image={information.poster_path}
                      title={information.original_title}
                      releaseDate={information.release_date}
                    />
                  </Grid>
                </Grid>

                <ContainerTime>
                  <AccessTimeIcon className="iconTime" />
                  <h1 className="title">{information.runtime} min</h1>
                </ContainerTime>
                <Grid item md={12} style={{ textAlign: "justify" }}>
                  {information.genres.map((value, i) => {
                    return <Sentence key={i}>{value.name}</Sentence>;
                  })}
                </Grid>
                <Grid item md={2} style={{ textAlign: "justify" }}>
                  <Sentence>{information.vote_average}</Sentence>
                </Grid>
              </ContainerTitles>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContainerDetails;
