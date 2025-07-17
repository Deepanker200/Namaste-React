import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useCollection from '../utils/useCollection';
import Shimmer from './Shimmer';
import RestaurantCard from './RestaurantCard';

const Collections = () => {
    const [colRestaurant, setColRestaurant] = useState([]);

    const { colId } = useParams();
    const colCards = useCollection(colId);

    console.log(colCards);
    

    if (!Array.isArray(colCards)) return <Shimmer />;

    return (
        <div>
            {colCards.map((restaurant, index) => (
                <Link
                    key={index}
                    to={"/restaurants/" + restaurant?.info?.id}
                >
                    <RestaurantCard resData={restaurant} />

                </Link>
            ))
            }

        </div>
    )
}

export default Collections