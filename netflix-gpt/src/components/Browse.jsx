import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';

const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  //Fetch Data from TMDB API and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useHorrorMovies("horror");


  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch/>):
        (
          <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      )
      }
    </div>
  )
}

export default Browse