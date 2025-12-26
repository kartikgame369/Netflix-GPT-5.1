import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6">
      {/* Title */}
      <h1 className="text-white text-xl font-semibold mb-4">
        {title}
      </h1>

      {/* Movie Cards */}
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
