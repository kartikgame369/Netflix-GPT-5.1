import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative">
      <VideoTitle
        title={mainMovie.title}
        overview={mainMovie.overview}
      />
      <VideoBackground movie={mainMovie} />
    </div>
  );
};

export default MainContainer;
