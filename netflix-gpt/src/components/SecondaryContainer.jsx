import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-index-20'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList title={"Horror"} movies={movies?.horrorMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer