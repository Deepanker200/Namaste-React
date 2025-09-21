import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath,onClick}) => {
    if(!posterPath) return null;
    return (
        <div className="w-36 md:w-48 pr-4 cursor-pointer">
            <img alt="Movie Card"
            src={IMG_CDN_URL +posterPath}
            onClick={onClick}
            />
        </div>
    )
}

export default MovieCard