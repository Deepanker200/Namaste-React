import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-index-20'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer