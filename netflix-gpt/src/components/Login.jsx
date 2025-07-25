import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {

  const [isSignInform, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  }



  const handleButtonClick = () => {
    //Validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);

    // console.log(username);


    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInform) {
      // Signed UP 

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser(
                  {
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                  }
                ));
            })
            .catch((error) => {
              setErrorMessage(error.message)
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }



  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='h-screen md:h-auto object-cover' 
        src={BG_URL}
          alt='Background' />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-12 bg-black w-full md:w-3/12  my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInform ? "Sign In" : "Sign Up"}</h1>

        {!isSignInform && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 bg-opacity-30 rounded-lg border-2 border-solid border-white' />}

        <input
          ref={email}
          type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 bg-opacity-30 rounded-lg border-[1px] border-solid border-white' />
        <input
          ref={password}
          type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 bg-opacity-30 rounded-lg border-[1px] border-solid border-white' />

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInform ? "Sign In" : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInform ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login