import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useHorrorMovies = (movie) => {
    const dispatch = useDispatch();

    const horrorMovies = useSelector((store) => store.movies.horrorMovies)

    
    const getHorrorMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)

        const json = await data.json();
        // console.log(json.results);
        dispatch(addHorrorMovies(json.results));
    }

    useEffect(() => {
         !horrorMovies && getHorrorMovies();
    }, [])

}

export default useHorrorMovies;