//React Element is an object and not and HTML

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://mms.businesswire.com/media/20201011005092/en/829342/4/Food-e_logo_black.jpg?download=1"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurentCard = (props) => {
  console.log(props);
  return (
    
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-food"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/330px-Chole_Bhature_At_Local_Street.jpg"
      />
      <h3>Haldiram</h3>
      <h4>Chole Bhature, India</h4>
      <h4>4.5 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard resName="Haldiram" cuisine="Chole Bhature"/>
        <RestaurentCard resName="KFC" cuisine="Chicken Strips"/>
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
