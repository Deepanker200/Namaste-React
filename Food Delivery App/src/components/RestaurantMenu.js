import { useEffect } from 'react'

const RestaurantMenu = () => {

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu=async ()=>{
    const data=await fetch("https://cors-handlers.vercel.app/api/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151656&catalog_qa=undefined&submitAction=ENTER")
  
    const json=await data.json();

    console.log(json);
    
  }
  

  return (
    <div className='menu'>
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu;