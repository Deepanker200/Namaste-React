import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  
  //Destructing
  const { cloudinaryImageId, name, avgRating, cuisines, sla,costForTwo } =
    resData?.info;
  const { deliveryTime } = sla;

  // console.log(props);
  return (
    // <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 text-black" style={styleCard}>    //custom styling
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 text-black">
      <img
        className="rounded-lg"
        alt="res-food"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;