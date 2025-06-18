import Shimmer from "./Shimmer";
import { CDN_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMEnu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);




  // const fetchMenu2 = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151656&catalog_qa=undefined&submitAction=ENTER")
  //   const json2 = await data.json();
  //   console.log(json2.data);
  // }

  if (resInfo === null) return <Shimmer />
console.log(resInfo);

  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log("Item Cards: ",itemCards);
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);


  return (
    <div className='menu text-center'>
      {/* <img
        alt="res-food"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        width="200" height="200" /> */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
      {/* <h2>Menu</h2> */}
      {/* <ul>

        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}- Rs. {item.card.info.price / 100}</li>
        ))}
      </ul> */}

      {/**categories accordions */}

      {categories.map((category)=>{
        return <RestaurantCategory  key={category?.card?.card?.categoryId} data={category?.card?.card}/>
      })}
    </div>
  )
}

export default RestaurantMenu;