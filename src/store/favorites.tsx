import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieListItem } from "../components/movie_list";

interface InitialState {
  favorites: Array<MovieListItem>;
}
const initialState: InitialState = {
  favorites: [],
};

// Then, handle actions in your reducers:
const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<MovieListItem>) {
      state.favorites.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter((e) => e.id !== action.payload);
    },
  },
});
export const { addMovie, removeMovie } = favorites.actions;
export default favorites;
