import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesreducer from "./moviesSlice"


const store = configureStore({
  reducer: {
    user: userReducer,
    movies:moviesreducer,
  },
});

export default store;
