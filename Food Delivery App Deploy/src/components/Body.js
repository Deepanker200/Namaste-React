import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import ItemsCarousel from "./ItemsCarousel";

const Body = () => {
  //Local State Variable- Super Powerful Variable

  //it is also known as array destructing
  //  const arr=useState(resObj)
  //  const [listOfRestaurnants,setListOfRestaurnants]=arr
  // const listOfRestaurnants=arr[0]
  // const setListOfRestaurnants=arr[1]

  const [listOfRestaurants, setListOfRestaurants] = useState([]);    //state variable
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);    //state variable
  const [itemsCarousel, setItemsCarousel] = useState([]);
  const [searchText, setSearchText] = useState("");    //state variable
  const [carouselTitle, setCarouselTitle] = useState("");
  // const [carouselCollection,setCarouselCollection]=useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  //Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
  console.log("Body Rendered");   //At first it will print 2 times due to loggedInUser value as context api re-renders


  useEffect(() => {
    // console.log("useEffect called");
    fetchData();

  }, []);

  const fetchData = async () => {

    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8059341&lng=77.05284840000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=28.7040592%26lng=77.1024901")

    const json = await data.json();
    console.log("This json:", json);

    //Optional Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setItemsCarousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setCarouselTitle(json?.data?.cards[0]?.card?.card?.header.title)
  }


  //online status

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline! Please check your internet connection
      </h1>
    );
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


  const { loggedInUser, setUsername } = useContext(UserContext);

  return !Array.isArray(listOfRestaurants) || listOfRestaurants.length === 0 ? <Shimmer /> : (
    <>
      <div className="body md:px-[150px] mt-8">


        <h1 className="text-xl font-bold">{carouselTitle}</h1>
        <div className="flex mt-5 overflow-x-scroll whitespace-nowrap md:w-full items-center gap-3">
          {itemsCarousel.map((car, index) => (
            <Link to={'/collections/' + car?.action?.link?.split("=")[1]?.split("&")[0]} key={car.id}>
              <ItemsCarousel item={car} />
            </Link>

          ))
          }
        </div>


        <div className="flex justify-center px-5">
          <div className="flex justify-between mt-12 overflow-x-scroll md:overflow-x-auto whitespace-nowrap md:w-full items-center gap-3">


            <div className="search flex items-center">
              <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.3
                );
                setFilteredRestaurant(filteredList);
              }}
              >
                Top Rated Restaurant</button>
            </div>

            <div className="search">

              <input type="text"
                data-testid="searchInput"
                className="border border-solid border-gray-500 w-[360px] h-[38px] rounded-s-md border-r-0 px-3"
                value={searchText} onChange={(e) => {
                  setSearchText(e.target.value);     //Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
                  const filteredRestaurant = listOfRestaurants.filter(
                    (res) =>
                      res.info.name.toLowerCase().includes(searchText));

                  setFilteredRestaurant(filteredRestaurant);
                }} />

              <button className="px-4 py-2 bg-green-100  rounded-e-md border border-gray-500 h-[40px]"
                onClick={() => {
                  //Filer the restaurant card and update the UI
                  console.log(searchText);

                  const filteredRestaurant = listOfRestaurants.filter(
                    (res) =>
                      res.info.name.toLowerCase().includes(searchText));

                  setFilteredRestaurant(filteredRestaurant);

                }}>Search</button>
            </div>
          </div>
        </div>


        <div className="flex flex-wrap justify-evenly mt-12">

          {filteredRestaurant.length === 0 && (
            <div className="text-center text-xl font-semibold text-gray-500 mt-10">
              Oops! No restaurants found.
            </div>
          )}

          {filteredRestaurant.map((restaurant) =>       //restaurant is a random map variable
          (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant.info.id}
            >

              {/**if the restaurant is promoted then add a promoted label to it */}
              {
                restaurant.info.areaName === "Rohini" ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
              }

              {/* <RestaurantCard resData={restaurant} />   Commented because I'm using Higher Order Component */}
            </Link>   //Always use unique key and not index(avoid it)
          ))}
        </div>
      </div>
    </>
  );
};

export default Body