import RestaurentCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variable- Super Powerful Variable

  //it is also known as array destructing
  //  const arr=useState(resObj)
  //  const [listOfRestaurnants,setListOfRestaurnants]=arr
  // const listOfRestaurnants=arr[0]
  // const setListOfRestaurnants=arr[1]

  const [listOfRestaurnants, setListOfRestaurnants] = useState(resObj);    //state variable


  //Normal JS variable
  let listOfRestaurnantsJS = [
    {
      info: {
        id: "385829",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
        locality: "Sinchai Colony",
        areaName: "Mohan Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 3.8,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.7",
        totalRatingsString: "310",
        sla: {
          deliveryTime: "50"
        }
      }
    },
    {
      info: {
        id: "385822",
        name: "Havmor",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
        locality: "Sinchai Colony",
        areaName: "Mohan Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.7,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.7",
        totalRatingsString: "310",
        sla: {
          deliveryTime: "50"
        }
      }
    },
    {
      info: {
        id: "385826",
        name: "MCD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
        locality: "Sinchai Colony",
        areaName: "Mohan Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.1,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.7",
        totalRatingsString: "310",
        sla: {
          deliveryTime: "50"
        }
      }
    }
  ];


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurnants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurnants(filteredList);
        }}
        >
          Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurnants.map((restaurant) => (
          //Always use unique key and not index(avoid it)

          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body