import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = () => {
  const trailerVideo = useSelector((store)=> store.movies?.tailerVedio);
  useMovieTrailer()
  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
