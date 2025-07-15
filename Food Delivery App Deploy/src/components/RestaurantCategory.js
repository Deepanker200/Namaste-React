import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex,dummy }) => {
    // console.log(data);


    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            {/**Header */}
            <div className="md:w-6/12 md:mx-auto md:my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title}({data.itemCards.length})</span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
                </div>

                {/**Accordion Body */}
                {showItems && <ItemList items={data.itemCards}  dummy={dummy}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;