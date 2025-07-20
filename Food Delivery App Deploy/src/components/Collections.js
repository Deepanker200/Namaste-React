import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useCollection from '../utils/useCollection';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

const Collections = () => {
    const [colRestaurant, setColRestaurant] = useState([]);

    const { colId } = useParams();
    const colCards = useCollection(colId);



    useEffect(() => {
        if (Array.isArray(colCards)) {
            setColRestaurant(colCards);
        }
    }, [colCards]);



    const handleTopRatedClick = () => {
        const filteredList = colCards.filter(
            (item) => item?.card?.card?.info?.avgRating > 4
        );
        setColRestaurant(filteredList);
    }



    const handleFastDelivery = () => {
        const filteredList = colCards.filter(
            (item) => item?.card?.card?.info?.sla.deliveryTime < 30
        );
        setColRestaurant(filteredList);
    }
    if (!Array.isArray(colCards) || colCards.length === 0) {
        return <Shimmer />;
    } else
        return (
            <>
                <div className='md:px-[150px] mt-12 px-2'>
                    <h1 className='text-4xl font-bold mb-2'>{colCards[0]?.card?.card?.title}</h1>
                    <h3 className='mb-5'>{colCards[0]?.card?.card?.description}</h3>

                    <div className='flex my-8 gap-3 p-2 overflow-x-scroll md:overflow-x-auto whitespace-nowrap md:w-full items-center'>
                        <div className="search flex items-center">
                            <button className="bg-white  rounded-[15px] outline-none  h-[40px] mr-[5px] px-[10px] text-[14px] font-semibold shadow-[0_0_5px_#bbb] text-gray-400"

                                onClick={handleTopRatedClick}
                            >
                                Top Rated Restaurant</button>
                        </div>
                        <div className="search flex items-center">
                            <button className="bg-white  rounded-[15px] outline-none  h-[40px] mr-[5px] px-[10px] text-[14px] font-semibold shadow-[0_0_5px_#bbb] text-gray-400"
                                onClick={handleFastDelivery}
                            >
                                Fast Delivery</button>
                        </div>


                        <div className="search flex ml-auto items-center">
                            <button className="bg-red-500 rounded-[15px] outline-none  h-[40px] px-[10px] text-[14px] font-semibold shadow-[0_0_5px_#bbb] text-white"
                                onClick={() => {
                                    setColRestaurant(colCards);
                                }}
                            >
                                Reset Filter</button>
                        </div>
                    </div>
                    <h2 className='text-2xl font-bold'>Restaurants to explore</h2>
                    <div className='flex flex-wrap justify-center md:justify-between mt-8'>
                        {colRestaurant.map((item, index) => {
                            const restaurantInfo = item?.card?.card?.info;

                            // Only render if info exists and has an id
                            return restaurantInfo?.id ? (
                                <Link key={restaurantInfo.id} to={"/restaurants/" + restaurantInfo.id}>
                                    <RestaurantCard resData={{ info: restaurantInfo }} />
                                </Link>
                            ) : null;
                        })}

                    </div>
                </div>
            </>
        )
}

export default Collections