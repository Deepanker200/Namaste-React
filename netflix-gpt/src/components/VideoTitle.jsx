import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-16 text-xl flex gap-4 items-center rounded-lg">
          <FontAwesomeIcon icon={faPlay} />
          Play</button>
        <button className="mx-2 bg-gray-500  text-white p-4 px-16 text-xl flex gap-4 items-center bg-opacity-50 rounded-lg hover:bg-opacity-50">
          <FontAwesomeIcon icon={faInfoCircle} />
          More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle