import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";


const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")   //It re-renders
  const [showMenu, setShowMenu] = useState(false);

  //Online Status

  const onlineStatus = useOnlineStatus();


  const { loggedInUser } = useContext(UserContext);


  const cartItems = useSelector((store) => store.cart.items)

  return (
    <>
      <div className="flex justify-between items-center shadow-lg mb-2 md:ps-6 px-2 w-full fixed bg-white z-20">
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
          <span className="text-black flex justify-center items-center h-full text-2xl">{showMenu ? "X" : "☰"}</span>
        </div>

        {showMenu && (
          <div className="absolute top-16 right-0 bg-white shadow-lg z-50 block md:hidden">
            <ul className="flex flex-col p-4 text-sm md:text-base">
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
                <button className="login flex items-center gap-2" onClick={() => {
                  setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                }}>
                  <span
                    className={`h-3 w-3 rounded-full ${btnNameReact === "Login" ? "bg-red-500" : "bg-green-500"
                      }`}
                  ></span>
                  {btnNameReact}
                </button>

              </li>
            </ul>
          </div>
        )}


        <div className="items-center hidden md:flex">
          <ul className="flex flex-wrap p-1 m-1 md:p-4 md:m-4 text-[10px] md:text-[16px]">

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
            <button className="login flex items-center gap-2" onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}>
              <span
                className={`h-3 w-3 rounded-full ${btnNameReact === "Login" ? "bg-red-500" : "bg-green-500"
                  }`}
              ></span>
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
      <div className="h-[60px] md:h-[100px]">
      </div>
    </>
  );
};

export default Header;