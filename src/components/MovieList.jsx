import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  
  return(
    <div className="py-4">
      <h1 className="text-xl md:text-3xl py-4 text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide gap-4">
        {movies.map(movie=>(
          <MovieCard key={movie.id} posterpath={movie.poster_path}/>
        ))}                               
      </div>
    </div>
  )
};

export default MovieList;