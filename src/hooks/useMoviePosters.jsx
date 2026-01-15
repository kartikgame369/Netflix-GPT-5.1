import { useState, useEffect } from "react";

const useMoviePosters = () => {
  const [loading, setLoading] = useState(true);
  const [posters, setPosters] = useState([]);
  

  useEffect(() => {
    const fetchPosters = async () => {
      console.log("Starting fetch...");
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8000/api/v1/movies/posters", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Response status:", res.status);
        
        const json = await res.json();
        console.log("API Response:", json);

        if (json.success) {
          setPosters(json.posters);
        }
      } catch (err) {
        console.error("Fetch error details:", {
          message: err.message,
          name: err.name,
          stack: err.stack
        });
        
        // Use fallback data
        setPosters([
          "/dpM7UpTlRe3mgDF4lLkIdTYd0gs.jpg",
          "/cWsBscZzwu5brg9YjNkGewRUvJX.jpg",
          "/kOrJqRyt1pklNgDwJMjzN1GuNXS.jpg",
          "/3R3dXO2nm8JyR5NG7SEfii7RzlV.jpg",
          "/udAxQEORq2I5wxI97N2TEqdhzBE.jpg",
          "/e0RU6KpdnrqFxDKlI3NOqN8nHL6.jpg",
          "/A5lswNlytTUrnMWsuD0NFfhZlf3.jpg",
          "/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg",
          "/v0s3dx6am0RzfsuK3KdEy8ZoCDs.jpg",
          "/wbmxnsv41vsg5UEaNDlf203dOWw.jpg",
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosters();
  }, []);

  return { loading, posters};
};

export default useMoviePosters;
