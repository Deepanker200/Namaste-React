import { use, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import '@fortawesome/fontawesome-free/css/all.min.css';

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  // console.log(resData);


  const { loggedInUser } = useContext(UserContext);

  //Destructing
  const { cloudinaryImageId, name, avgRating, cuisines, sla, costForTwo,locality,areaName } =
    resData?.info;
  const { deliveryTime } = sla;

  // console.log(props);
  return (
    // <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 text-black" style={styleCard}>    //custom styling
    <div data-testid="resCard" className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg h-[258px] mx-auto"
        alt="res-food"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div className="flex gap-3 items-center">
        <h4 className="flex gap-2 items-center"><span className="bg-green-600 text-white border border-green-600 rounded-full p-1 text-[12px] h-[20px] w-[20px] flex items-center justify-center"><i className="fa-solid fa-star"></i></span>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
      <h4>{locality}, {areaName}</h4>
      <h4>User: <b>{loggedInUser}</b></h4>
    </div>
  );
};

//Higher Order Component

//input - RestaurantCard    Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;