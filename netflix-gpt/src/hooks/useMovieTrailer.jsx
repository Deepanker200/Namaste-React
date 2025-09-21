import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movieId) return;

        const getMovieVideos = async () => {
            try {
                const data = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                    API_OPTIONS
                );
                const json = await data.json();

                const filterData = json.results?.filter(video => video.type === "Trailer");
                const trailer =
                    filterData?.find(item => item.name === "Official Trailer") || filterData?.[0];

                if (trailer) {
                    dispatch(addTrailerVideo(trailer));
                }
            } catch (error) {
                console.error("Failed to fetch trailer:", error);
            }
        };

        getMovieVideos();
    }, [movieId, dispatch]);
};

export default useMovieTrailer;
