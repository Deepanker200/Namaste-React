import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    // console.log("MovieList rendered with movies:", movies);
    if (!movies) return;


    return (
        <div className="px-6 pt-8">
            <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies?.map(movie => <MovieCard key={movie?.id} posterPath={movie?.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList