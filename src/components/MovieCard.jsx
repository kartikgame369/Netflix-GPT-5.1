import { IMG_CDN } from "../utils/Constents";


const MovieCard =({posterpath})=>{
  return(
    <div className="w-48 pr ">
      <img alt="movie card" src={IMG_CDN + posterpath}></img>
    </div>
  )
}

export default MovieCard;