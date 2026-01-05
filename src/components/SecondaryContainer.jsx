import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  if (!nowPlayingMovies || nowPlayingMovies.length === 0) return null;

  return (
    <div className="relative bg-black pt-8">
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
