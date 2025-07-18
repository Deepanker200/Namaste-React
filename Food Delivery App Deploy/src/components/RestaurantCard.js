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
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
    costForTwo,
    locality,
    areaName,
    aggregatedDiscountInfoV3
  } = resData?.info || {};

  // console.log(resData?.info?.aggregatedDiscountInfoV3);

  const deliveryTime = sla?.deliveryTime ?? "--";
  const { header, subHeader } = aggregatedDiscountInfoV3 || {};





  // console.log(props);
  return (
    // <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 text-black" style={styleCard}>    //custom styling
    <div data-testid="resCard" className="m-4 p-4 md:px-0 md:mx-0 md:pt-0 md:mt-0 w-[250px] rounded-lg">

      <div className="relative w-64 h-40 rounded-lg overflow-hidden">
        <img
          className="rounded-lg w-[250px] mx-auto h-[182px] object-cover relative"
          alt="res-food"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <div className="absolute bottom-0 flex items-end bg-gradient-to-t from-[#1b1e24d9] to-[#1b1e2400] w-full">
          {aggregatedDiscountInfoV3 && (
            <h4 className="text-white my-[5px] mx-[10px] text-xl font-bold">
              {header} {subHeader}
            </h4>
          )}
        </div>
      </div>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div className="flex gap-3 items-center">
        <h4 className="flex gap-2 items-center"><span className="bg-green-600 text-white border border-green-600 rounded-full p-1 text-[12px] h-[20px] w-[20px] flex items-center justify-center"><i className="fa-solid fa-star"></i></span>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
      <h4 className="text-gray-600"> {areaName}</h4>

      <h4 className="truncate">{Array.isArray(cuisines) ? cuisines.join(', ') : ''}</h4>
    </div>
  );
};

//Higher Order Component

//input - RestaurantCard    Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-500 text-white px-3 py-1 rounded-lg z-10 border border-black">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;