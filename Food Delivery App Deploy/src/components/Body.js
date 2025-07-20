import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext, useRef } from "react";
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
  const [top, setTop] = useState([]);
  const [searchText, setSearchText] = useState("");    //state variable
  const [carouselTitle, setCarouselTitle] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  //Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
  // console.log("Body Rendered");   //At first it will print 2 times due to loggedInUser value as context api re-renders



  const scrollRef = useRef(null);
  const scrollColRef = useRef(null);

  const handleScroll = (ref, direction) => {
    const distance = 600;
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {

    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8059341&lng=77.05284840000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=28.7040592%26lng=77.1024901")

    const json = await data.json();
    // console.log("This json:", json);

    //Optional Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setTop(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
      <div className="body md:px-[150px] px-2 mt-8">

        <h1 className="text-xl font-bold">{carouselTitle}</h1>

        <div className="relative">
          <div className="md:flex justify-end gap-2 hidden">
            <button
              className=" z-10 bg-gray-200 shadow-md p-2 rounded-full top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center"
              onClick={() => handleScroll(scrollColRef, "left")}
            >
              <i className="fa-solid fa-arrow-left text-gray-500"></i>
            </button>
            {/* Scroll Right Button */}
            <button
              className="z-10 bg-gray-200 shadow-md p-2 rounded-full top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center"
              onClick={() => handleScroll(scrollColRef, "right")}
            >
              <i className="fa-solid fa-arrow-right text-gray-500"></i>
            </button>
          </div>
          <div
            ref={scrollColRef}
            className="flex justify-between whitespace-nowrap overflow-x-scroll gap-12 mt-2 scroll-smooth md:overflow-x-hidden"
          >
            <div className="flex mt-5 whitespace-nowrap md:w-full items-center gap-3">
              {itemsCarousel.map((car, index) => (
                <Link to={'/collections/' + car?.action?.link?.split("=")[1]?.split("&")[0]} key={car.id}>
                  <ItemsCarousel item={car} />
                </Link>

              ))
              }
            </div>
          </div>
        </div>
        <hr className="h-[2px] mt-2 w-full bg-[#5e0f9f4d]" />

        <h1 className='text-2xl font-bold mt-10 mb-4'>Top restaurant chains in Delhi</h1>

        <div className="relative">
          {/* Scroll Left Button */}
          <div className="md:flex hidden justify-end gap-2">
            <button
              className=" z-10 bg-gray-200 shadow-md p-2 rounded-full top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center"
              onClick={() => handleScroll(scrollRef, "left")}
            >
              <i className="fa-solid fa-arrow-left text-gray-500"></i>
            </button>
            {/* Scroll Right Button */}
            <button
              className="z-10 bg-gray-200 shadow-md p-2 rounded-full top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center"
              onClick={() => handleScroll(scrollRef, "right")}
            >
              <i className="fa-solid fa-arrow-right text-gray-500"></i>
            </button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex justify-between overflow-x-scroll whitespace-nowrap gap-12 mt-12 scroll-smooth md:overflow-x-hidden"
          >
            {top.length === 0 && (
              <div className="text-center text-xl font-semibold text-gray-500 mt-10">
                Oops! No restaurants found.
              </div>
            )}

            {top.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} cta={true} />
              </Link>
            ))}
          </div>
        </div>

        <hr className="h-[2px] mt-2 w-full bg-[#5e0f9f4d]" />

        <h2 className="text-xl font-bold mt-12 mb-3">Restaurants with online food delivery in Delhi</h2>
        <div className="flex justify-center">
          <div className="flex justify-start overflow-x-scroll md:overflow-x-auto whitespace-nowrap md:w-full items-center gap-3 p-2">
            <div className="search">
              <input type="text"
                data-testid="searchInput"
                className="bg-white  rounded-[15px] outline-none w-[200px] h-[40px] mr-[5px] px-[10px] text-[14px] font-semibold shadow-[0_0_5px_#bbb] text-gray-400"
                placeholder="Search for restaurants"
                value={searchText} onChange={(e) => {
                  setSearchText(e.target.value);
                  const filteredRestaurant = listOfRestaurants.filter(
                    (res) =>
                      res.info.name.toLowerCase().includes(searchText));

                  setFilteredRestaurant(filteredRestaurant);
                }} />
            </div>

            <div className="search flex items-center">
              <button className="bg-white  rounded-[15px] outline-none  h-[40px] mr-[5px] px-[10px] text-[14px] font-semibold shadow-[0_0_5px_#bbb] text-gray-400"
                onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setFilteredRestaurant(filteredList);
                }}
              >
                Ratings 4.0+</button>
            </div>

            <div className="search flex items-center">
              <button className="bg-white rounded-[15px] outline-none  h-[40px] mr-[5px] px-[10px] text-[14px] font-semibold shadow-[0_0_5px_#bbb] text-gray-400"
                onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.info.sla.deliveryTime < 30
                  );
                  setFilteredRestaurant(filteredList);
                }}
              >
                Fast Delivery</button>
            </div>

            <div className="search flex items-center">
              <button className="bg-white  rounded-[15px] outline-none  h-[40px] mr-[5px] px-[10px] text-[14px] font-semibold shadow-[0_0_5px_#bbb] text-gray-400"
                onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.info.veg ==true

                  );
                  setFilteredRestaurant(filteredList);
                }}
              >
                Pure Veg</button>
            </div>


          </div>
        </div>


        <div className="flex flex-wrap justify-center md:justify-around mt-12">

          {filteredRestaurant.length === 0 && (
            <div className="text-center text-xl font-semibold text-gray-500 mt-10">
              Oops! No restaurants found.
            </div>
          )}

          {filteredRestaurant.map((restaurant) =>
          (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant.info.id}
            >

              {
                restaurant.info.areaName === "Rohini" ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
              }

            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body