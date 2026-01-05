import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-6">
      <h1 className="text-white text-xl font-semibold mb-4">
        {title}
      </h1>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
