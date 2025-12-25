import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constents";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/moviesSlice";

const VedioBackground = () => {
  const trailerVedio = useSelector(
    (store) => store.movies.trailerVedio
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getMoviesVedio = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTIONS
      );

      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer =
        filterData.length ? filterData[0] : json.results[0];

      dispatch(addTrailerVedio(trailer));
    };

    getMoviesVedio();
  }, [dispatch]);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailerVedio?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
