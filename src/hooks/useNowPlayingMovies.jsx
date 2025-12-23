import { useEffect } from "react";
import { addNowPlayingmovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from "../utils/Constents";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

  useEffect(()=>{
    const getNowPlayingMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingmovies(json.results ));
    };
    getNowPlayingMovies();
  },[dispatch])

}

export default useNowPlayingMovies;