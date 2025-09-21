import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = ({ movieId }) => {
    useNowPlayingMovies();

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if (!movies) return <div>Loading</div>;        //Early return

    // const mainMovie = movies[0];
    // console.log(mainMovie);


    //Dynamic movie selection
    const mainMovie = movieId
        ? movies.find((movie) => movie.id === movieId)
        : movies[0];


    if (!mainMovie) return <div>Movie not found</div>;


    const { original_title, overview, id } = mainMovie;

    return (
        <div className="pt-[30%] md:pt-0 bg-black">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;