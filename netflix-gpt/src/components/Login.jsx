import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInform, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg'
          alt='Background' />
      </div>
      <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInform ? "Sign In" : "Sign Up"}</h1>

        {!isSignInform && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 bg-opacity-30 rounded-lg border-2 border-solid border-white' />}

        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 bg-opacity-30 rounded-lg border-2 border-solid border-white' />
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 bg-opacity-30 rounded-lg border-2 border-solid border-white' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInform ? "Sign In" : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInform ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login