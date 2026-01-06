import { useSelector } from "react-redux"
import MovieCard from "./MovieCard";


const SecondaryContainer=()=>{
  const movies = useSelector((store)=> store.movies);
  return(
    <div>
      <MovieCard title={"now playing"} movies={movies.nowplayingMovies}/>
      <MovieCard title={"popular"} movies={movies.popularMovies}/>
      <MovieCard title={"top rated"} movies={movies.topRatedMovies}/>
      <MovieCard title={"upcoming"} movies={movies.upcomingMovies}/>
    </div>
  )
}
export default SecondaryContainer;