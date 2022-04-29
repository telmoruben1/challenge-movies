import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ButtonFavoritesProps {
  checkFavorite: boolean;
  onFavoriteUncheck: () => void;
  onFavoriteCheck: () => void;
}

const ButtonFavorites: FunctionComponent<ButtonFavoritesProps> = ({
  checkFavorite,
  onFavoriteUncheck,
  onFavoriteCheck,
}) => {
  return (
    <Button variant="text">
      {checkFavorite ? (
        <FavoriteIcon onClick={() => onFavoriteUncheck()} className="iconFav" />
      ) : (
        <FavoriteBorderIcon
          onClick={() => onFavoriteCheck()}
          className="iconFav"
        />
      )}
    </Button>
  );
};

export default ButtonFavorites;
