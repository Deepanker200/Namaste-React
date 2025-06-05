import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Local State Variable- Super Powerful Variable

  //it is also known as array destructing
  //  const arr=useState(resObj)
  //  const [listOfRestaurnants,setListOfRestaurnants]=arr
  // const listOfRestaurnants=arr[0]
  // const setListOfRestaurnants=arr[1]

  const [listOfRestaurants, setListOfRestaurants] = useState([]);    //state variable
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);    //state variable
  const [searchText, setSearchText] = useState("");    //state variable

  //Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
  console.log("Body Rendered");


  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    console.log("This json:",json);

    //Optional Chaining
    // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  //Conditional Rendering
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }

  //Normal JS variable
  let listOfRestaurantsJS = [
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


  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">

          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);     //Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
          }} />

          <button onClick={() => {
            //Filer the restaurant card and update the UI
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter(
              (res) =>
                res.info.name.toLowerCase().includes(searchText));

            setFilteredRestaurant(filteredRestaurant);

          }}>Search</button>
        </div>


        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setFilteredRestaurant(filteredList);
        }}
        >
          Top Rated Restaurant</button>
      </div>


      <div className="res-container">
        {filteredRestaurant.map((restaurant) =>       //restaurant is a random map variable
        (
          <Link
              key={restaurant?.info?.id} // ✅ Correct placement

            to={"/restaurants/" + restaurant.info.id}
             style={{color: "blue" }}
            >
              <RestaurantCard resData={restaurant} /></Link>   //Always use unique key and not index(avoid it)
        ))}
      </div>
    </div>
  );
};

export default Body