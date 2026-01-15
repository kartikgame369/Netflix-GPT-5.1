import MovieCard from "./MovieCard";

const MovieList = ({ title, posters }) => {
  if (!posters || posters.length === 0) {
    return <p className="text-white">No movies available</p>;
  }

  return (
    <div className="py-4">
      <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
        {title}
      </h2>
      <div className="flex overflow-x-scroll scrollbar-hide gap-4 pb-4">
        {posters.map((posterPath, index) => (
          <MovieCard key={index} posterPath={posterPath} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;