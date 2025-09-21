import React from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='bg-blue-950 py-4 text-white text-center text-xl font-semibold'>
        <p>Made with ❣️ by Deepanker Tiwari</p>
        <p className='py-2'>Follow Me On:</p>
        <a href='https://freakcoder.com/'><FontAwesomeIcon icon={faGlobe}/></a>
        <a href='https://www.linkedin.com/in/deepanker-tiwari/' className='ms-4'><FontAwesomeIcon icon={faLinkedin}/></a>
    </div>
  )
}

export default Footer