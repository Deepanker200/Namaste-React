import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null)

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER")

    const json = await data.json();

    console.log("Data: ", json);
    setResInfo(json.data);
  }

  // const fetchMenu2 = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151656&catalog_qa=undefined&submitAction=ENTER")
  //   const json2 = await data.json();
  //   console.log(json2.data);
  // }

  if (resInfo === null) return <Shimmer />

  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log("Item Cards: ",itemCards);

  return (
    <div className='menu'>
      <img
        alt="res-food"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        width="200" height="200" />
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>

        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}- Rs. {item.card.info.price / 100}</li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu;