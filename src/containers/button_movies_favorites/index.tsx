import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/favorites";
import { RootState } from "../../store";
import ButtonFavorites from "../../components/button_favorites";

interface ButtonMoviesFavoritesProps {
  id: number;
  image: string | null;
  title: string;
  releaseDate: Date;
}

const ButtonMoviesFavorites: FunctionComponent<ButtonMoviesFavoritesProps> = ({
  id,
  image,
  title,
  releaseDate,
}) => {
  const dispatch = useDispatch();
  const checkFavorite = useSelector<RootState, boolean>((state) =>
    state.favorites.favorites.some((e) => e.id === id)
  );
  const onFavoriteUncheck = () => {
    dispatch(removeMovie(id));
  };
  const onFavoriteCheck = () => {
    dispatch(
      addMovie({
        id: id,
        image: image,
        title: title,
        releaseDate: releaseDate,
      })
    );
  };
  return (
    <>
      <ButtonFavorites
        checkFavorite={checkFavorite}
        onFavoriteUncheck={onFavoriteUncheck}
        onFavoriteCheck={onFavoriteCheck}
      />
    </>
  );
};

export default ButtonMoviesFavorites;
