import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")   //It re-renders

  //Online Status

  const onlineStatus = useOnlineStatus();

  // console.log("Header render");
  // console.log((btnNameReact));

  // if no dependency array=> useEffect is called on every render
  // if dependency array is empty =[] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated


  useEffect(() => {
    // console.log("UseEffect called");
  });

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items)
  // console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg mb-2 bg-pink-100 sm:bg-yellow-300 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">
              Cart - ({cartItems.length} items)
            </Link>
          </li>
          <button className="login" onClick={() => {
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login")
          }}>{btnNameReact}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;