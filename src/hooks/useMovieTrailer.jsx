// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/Constents";
// import { addTrailerVedio } from "../utils/moviesSlice";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const useMovieTrailer = () => {
//   const { id } = useParams(); // ✅ fetch only id
//   const dispatch = useDispatch();

//   const getMovieVideos = async () => {
//     if (!id) return;

//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
//       API_OPTIONS
//     );

//     const json = await data.json();
//     console.log(json);

//     // ✅ FIX: results (not result)
//     const filterData = json.results?.filter(
//       (video) => video.type === "Trailer"
//     );

//     const trailer = filterData?.length  ? filterData[0]
//       : json.results?.[0];

//     if (trailer) {
//       dispatch(addTrailerVedio(trailer));
//     }
//   };

//   useEffect(() => {
//     getMovieVideos();
//   }, [id]); // ✅ dependency added
// };

// export default useMovieTrailer;

// const  useBackgroud=()=>{
//     return (
//         <div>
//             <iframe
//              width="560"
//               height="315"
//                src="https://www.youtube.com/embed/sEgPQ7HKoBA?si=_0nqz_TOKwxsZwFS"
//                 title="YouTube video player"
//                  frameborder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                    referrerpolicy="strict-origin-when-cross-origin"
//                     allowfullscreen></iframe>
//         </div>
//     )
// };

// export default useBackgroud;