import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null, 
  },
  reducers: {
    addNowPlayingmovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
  },
});


export const {
  addNowPlayingmovies,
  addTrailerVedio,
} = moviesSlice.actions;

export default moviesSlice.reducer;
