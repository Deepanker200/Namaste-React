//React Element is an object and not and HTML
//Note: There's a term known as config driven ui

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Collections from "./components/Collections";
import '@fortawesome/fontawesome-free/css/all.css'
import Footer from "./components/Footer";


// import Grocery from "./components/Grocery";


// const RestaurentCard2 = ({ resName, cuisine }) => {
//   console.log("This is destructing on the fly");
// };

const AppLayout = () => {

  const [username, setUsername] = useState();

  //authentication
  useEffect(() => {
    const data = {
      name: "Deepanker Tiwari"
    }

    setUsername(data.name)
  }, [])

  return (

    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
          <Footer/>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));   //import is a function here

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/collections/:colId",
        element: <Collections />
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


