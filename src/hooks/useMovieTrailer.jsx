import { useDispatch } from "react-redux";
import { addTrailerVedio } from "../utils/moviesSlice";
import { useEffect, useCallback } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = useCallback(async () => {
    if (!movieId) return;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      }
    );

    const json = await response.json();
    if (!json?.results?.length) return;

    const trailer =
      json.results.find((video) => video.type === "Trailer") ||
      json.results[0];

    dispatch(addTrailerVedio(trailer));
  }, [movieId, dispatch]);

  useEffect(() => {
    getMovieVideos();
  }, [getMovieVideos]);
};

export default useMovieTrailer;
