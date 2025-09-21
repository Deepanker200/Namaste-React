import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[10%] md:pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold mb-3">{title}</h1>
      <div className='py-6'>
      <p className="text-lg w-1/3 hidden md:line-clamp-4">{overview}</p>
      </div>
      <div className="flex">
        <button className="bg-white text-black p-2 md:p-4 px-4 md:px-12 text-lg md:text-xl flex gap-2 items-center rounded-lg">
          <FontAwesomeIcon icon={faPlay} />
          Play</button>
        <button className="mx-2 bg-gray-500  text-white p-2 md:p-4 px-4 md:px-12 text-lg md:text-xl flex gap-2 items-center bg-opacity-50 rounded-lg hover:bg-opacity-50">
          <FontAwesomeIcon icon={faInfoCircle} />
          More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle