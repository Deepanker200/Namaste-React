import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';

const SecondaryContainer = ({onMovieClick}) => {


  //Fetch Data from TMDB API and update store
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useHorrorMovies("horror");

   const handleMovieClick = (movieId) => {
        // console.log("Movie clicked from Browse:", movieId);
        // You can set state, route to detail page, etc.
        // console.log(movieId);

        
        onMovieClick(movieId);
    };
  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-index-20'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} onMovieClick={handleMovieClick}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies} onMovieClick={handleMovieClick}/>
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} onMovieClick={handleMovieClick}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} onMovieClick={handleMovieClick}/>
        <MovieList title={"Horror"} movies={movies?.horrorMovies} onMovieClick={handleMovieClick}/>
      </div>
    </div>
  )
}

export default SecondaryContainer