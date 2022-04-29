import { Card, CardMedia } from "@mui/material";
import { FunctionComponent, useState } from "react";
import imageNotFound from "../../assets/notFoundImage.jpg";
import { getMessageDate } from "../../utils/date_utils";
import "./style.scss";

export interface MovieCardProps {
  image: string | null;
  title: string;
  releaseDate: Date;
  onClick: () => void;
}
const MovieCard: FunctionComponent<MovieCardProps> = ({
  image,
  title,
  releaseDate,
  onClick,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Card
      className="configImage"
      data-testid="card"
      onMouseLeave={(e) => {
        setShowDetails(false);
      }}
      onMouseEnter={(e) => {
        setShowDetails(true);
      }}
      onClick={onClick}
    >
      <div className="config">
        <CardMedia
          className="config"
          component="img"
          image={
            image ? `https://image.tmdb.org/t/p/w500/${image}` : imageNotFound
          }
          title="Pancakes"
          alt="Pancakes"
        />
        {showDetails ? (
          <div className="fadeInformation" data-testid="fadeInformation">
            <h3 data-testid="title">{title}</h3>
            <h5 data-testid="release">{`Release date: ${getMessageDate(
              releaseDate
            )}`}</h5>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default MovieCard;
