import React, { useEffect, useState } from 'react'
import { COLL_API, MENU_API } from './constants';

const useCollection = (colId) => {
    const [cards, setCards] = useState([]);
    //fetch data
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(COLL_API + colId +
            "%26lat=28.7040592%26lng=77.1024901");

        const json = await data.json();
        const cardsArray = json?.data?.cards || [];
        setCards(cardsArray)
    }

    return cards;
}
export default useCollection