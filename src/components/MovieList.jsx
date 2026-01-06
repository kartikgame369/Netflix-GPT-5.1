
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("this all movies",movies);
  return(
    <div>
      <div className="p-6 ">
        <h1 className="text-3xl py-4 ">{title}</h1>
      </div>
      <div className=" flex overflow-x-scroll scrollbar-hide  p-6 ">
        {movies.map(movie=>(
          <MovieCard key={movie.id} posterpath={movie.poster_path}/>
        ))}                               
      </div>
    </div>
  )
};

export default MovieList;