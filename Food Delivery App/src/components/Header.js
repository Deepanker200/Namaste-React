import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


// import logo from '/img/appLogo.png';

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")   //It re-renders
  const [showMenu, setShowMenu] = useState(false);

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
    <div className="flex justify-between items-center shadow-lg mb-2 md:ps-6 px-2">
      <div className="logo-container">
        <Link to='/'>
          <img className="w-26 md:w-56 md:h-[100px] h-[60px]" src={LOGO_URL} />
        </Link>
      </div>

      <div
        className="h-12 w-10 cursor-pointer block md:hidden"
        onClick={() => setShowMenu(!showMenu)}
        onBlur={() => setShowMenu(false)}
        onFocus={() => setShowMenu(true)}
      >
        <span className="text-black flex justify-center items-center h-full text-2xl">☰</span>
      </div>

      {showMenu && (
        <div className="absolute top-16 right-0 bg-white shadow-lg z-50 block md:hidden">
          <ul className="flex flex-col p-4 text-sm md:text-base">
            <li className="py-1">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="py-1">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1">
              <Link to="/about">About</Link>
            </li>
            <li className="py-1">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="py-1">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="py-1 font-bold">
              <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
            <li className="flex justify-start">
              <button
                className="px-3 py-2 bg-black text-white rounded-lg"
                onClick={() =>
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login")
                }
              >
                {btnNameReact}
              </button>
            </li>
            <li className="py-1 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      )}


      <div className="items-center hidden md:flex">
        <ul className="flex flex-wrap p-1 m-1 md:p-4 md:m-4 text-[10px] md:text-[16px]">
          <li className="px-2 md:px-4">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 md:px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 md:px-4 font-bold md:text-xl">
            <Link to="/cart">
              Cart - ({cartItems.length} items)
            </Link>
          </li>
          <button className="login" onClick={() => {
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login")
          }}>{btnNameReact}</button>
          <li className="px-2 md:px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;