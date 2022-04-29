import { styled } from "@mui/material";
import React, { FunctionComponent } from "react";

const ContainerBackImage = styled("div")({
  position: "absolute",
  left: "0",
  width: "100%",
  height: "732px",
  backgroundPosition: "center center !important",
  marginTop: "-13px",
  borderBottom: "1px solid #444",
  opacity: "0.15",
});

interface ContainerImageProps {
  image: string | null;
}
const ContainerImage: FunctionComponent<ContainerImageProps> = ({ image }) => {
  return (
    <>
      {image ? (
        <ContainerBackImage
          style={{
            background: `url(https://image.tmdb.org/t/p/original/${image})`,
            backgroundSize: "cover",
          }}
        ></ContainerBackImage>
      ) : null}
    </>
  );
};

export default ContainerImage;
