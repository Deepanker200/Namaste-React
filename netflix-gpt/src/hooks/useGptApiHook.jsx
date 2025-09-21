import { useDispatch } from "react-redux";
import client from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const useGptApiHook = () => {

  const dispatch = useDispatch();


  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //Make an API call to GPT API and get Movie Result

    const getQuery = "Act as a Movie Recommendation System and Sugges some movies for the query " + searchText.current.value + ". Only give me names and not write 'Here are... '  of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: 'user', content: getQuery },
      ],
    });

    if (!gptResults.choices) {
      //Todo: Write Error Handling
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");


    //For each movie I will search TMDB API
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  }
}

export default useGptApiHook;