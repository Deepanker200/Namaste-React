import React, { useEffect, useState } from 'react'


const User = ({name}) => {
  
  const [count,setCount]=useState(0);

useEffect(()=>{
  //API calls
  
},[]);


  return (
    <div className='user-card'>
      <h1>Count: {count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: Deepanker200</h4>
    </div>
  )
}

export default User;