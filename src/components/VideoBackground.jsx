import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVedio
  );

  useMovieTrailer(movieId);

  if (!trailerVideo?.key) return null;

  return (
   <div className="fixed inset-0 w-screen h-screen overflow-hidden ">
  <iframe
    className="
      absolute top-1/2 left-1/2
      min-w-full min-h-full
      w-auto h-auto
      -translate-x-1/2 -translate-y-1/2
      scale-125
      object-cover
      pointer-events-none
    "
    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

  );
};

export default VideoBackground;
