import React from 'react'
import { CDN_URL } from '../utils/constants';

const ItemsCarousel = ({ item }) => {

  const { imageId } = item?.gridElements?.infoWithStyle?.info || {};
  console.log( CDN_URL + imageId);



return (
  <>
    <div className=''>
      {imageId ? (
        <img src={CDN_URL + imageId} alt="carousel" className='max-w-40' />
      ) : (
        <p>No image available</p>
      )}
    </div>
  </>
)
}

export default ItemsCarousel