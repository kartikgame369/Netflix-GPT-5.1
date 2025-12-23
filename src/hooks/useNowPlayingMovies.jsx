import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingmovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/Constents"; 

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          API_OPTIONS
        );

        if (!response.ok) {
          throw new Error("Failed to fetch now playing movies");
        }

        const json = await response.json();
        console.log(json)
        dispatch(addNowPlayingmovies(json.results));
      } catch (error) {
        console.error("Now Playing Movies Error:", error);
      }
    };

    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
