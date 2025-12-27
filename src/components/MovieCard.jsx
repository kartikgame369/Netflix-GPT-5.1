import React from "react";
import { IMG_CDN } from "../utils/Constents";

function MovieCard({ posterPath }) {
  if (!posterPath) return null;

  return (
    <div>
      <img src={IMG_CDN + posterPath} alt="poster" />
    </div>
  );
}

export default MovieCard;
