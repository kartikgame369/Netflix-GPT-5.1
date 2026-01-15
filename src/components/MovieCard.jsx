const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-44 ">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="w-full rounded-md hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default MovieCard;