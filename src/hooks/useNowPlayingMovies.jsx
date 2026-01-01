import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingmovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "/api/v1/movies/now-playing", // ✅ proxy will forward this
          {
            method: "GET",
            credentials: "include", // if cookies/auth used
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const json = await response.json();

        // Adjust according to backend response
        dispatch(addNowPlayingmovies(json.data || json.results));
      } catch (error) {
        console.error("Now Playing Movies Error:", error.message);
      }
    };

    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
