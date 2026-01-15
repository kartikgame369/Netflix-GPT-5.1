import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useMoviePosters from "../hooks/useMoviePosters";

const SecondaryContainer = () => {
  const reduxMovies = useSelector((store) => store.movies);
  const { loading, posters, error } = useMoviePosters();

  if (loading && !reduxMovies?.nowPlayingMovies) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-2xl">Error: {error}</p>
      </div>
    );
  }

  // Use redux movies if available, otherwise use posters from API
  const hasReduxMovies = reduxMovies?.nowPlayingMovies?.length > 0;

  return (
    <div className="bg-black min-h-screen">
      <div className="pl-4 md:pl-12 relative z-20 pt-8">
        {hasReduxMovies ? (
          <>
            <MovieList title={"Now Playing"} movies={reduxMovies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={reduxMovies.popularMovies} />
            <MovieList title={"Top Rated"} movies={reduxMovies.topRatedMovies} />
            <MovieList title={"Upcoming Movies"} movies={reduxMovies.upcomingMovies} />
          </>
        ) : (
          <MovieList title="Trending Now" posters={posters} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;