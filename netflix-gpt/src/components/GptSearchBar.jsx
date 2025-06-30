import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import client from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)

    const json = await data.json();
    return json.results;
  }


  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //Make an API call to GPT API and get Movie Result

    const getQuery = "Act as a Movie Recommendation System and Sugges some movies for the query " + searchText.current.value + ". Only give me names and not write 'Here are... '  of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await client.chat.completions.create({
      model: "llama3-70b-8192",
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


  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
      <form className='w-100 md:w-1/2 bg-black bg-opacity-70 grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type='text' className='p-4 m-4 col-span-9'
          placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar