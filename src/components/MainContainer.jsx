import { useSelector } from "react-redux"
import VedioBackground from "./VideoBackground"
import VedioTitle from "./VideoTitle"
const MainContainer = ()=>{
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    if(movies ===null) return;

    const mainMovies = movies[0];
    console.log(mainMovies);
    return <div>
        <VedioBackground/>
        <VedioTitle/>
    </div>
}

export default MainContainer;