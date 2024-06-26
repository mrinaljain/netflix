import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR, HERO_IMAGE } from '../utils/constants';

function Login() {

   const [searchParams, setSearchParams] = useSearchParams();
   const [formData, setFormData] = useState({})
   const [isError, setIsError] = useState(false)
   const [signin, setSignin] = useState(true)
   const isSignup = searchParams.get("signup");

   const dispatch = useDispatch();
   const style = {
      backgroundImage: "url(" + HERO_IMAGE + ")",
      backgroundSize: "cover"
   }

   // To switch between signup and signin form based on URL
   useEffect(() => {
      if (isSignup) {
         setSignin(false);
      } else {
         setSignin(true);
      }
   }, [searchParams])

   function handleAuth(e) {
      e.preventDefault();
      let name = formData.name;
      let email = formData.email;
      let password = formData.password;

      if (signin) {
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               // Signed in 
               const user = userCredential.user;
               const displayName = user.displayName;

            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setIsError(errorMessage);
            });
      } else {
         createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               const user = userCredential.user;
               // update user profile after signin
               updateProfile(user, {
                  displayName: name,
                  photoURL: USER_AVATAR
               }).then(() => {
                  // Profile updated!
                  const { uid, email, displayName, photoURL } = auth.currentUser;
                  dispatch(addUser({
                     uid: uid,
                     email: email,
                     displayName: displayName,
                     photoURL: photoURL,
                  })
                  )
               }).catch((error) => {
                  // An error occurred
                  // ...
               });

            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setIsError(errorMessage);
            });
      }



   }
   //common handle change to get all values
   function handleChange(e) {
      setFormData((oldFormData) => {
         return {
            ...oldFormData, ... { [e.target.name]: e.target.value }
         }
      });
   }

   function toggleAuth() {
      let isSignup = searchParams.get("signup");
      if (isSignup == "true") {
         searchParams.delete("signup")
         setSearchParams(searchParams);
      }
      else {
         setSearchParams({ signup: "true" });
      }

   }
   const inputStyle = {
      backgroundColor: "#465a7e66",
      borderWidth: "0.0625rem",
      borderColor: "rgba(128, 128, 128, 0.7",
   }
   return (
      <div className="relative">
         <nav className='bg-transparent z-10  flex w-[66%] mx-auto absolute top-0 left-0 right-0'>
            <img className='w-36'
               src={LOGO} alt="netflix-logo" />
         </nav>
         <div
            className='w-[100vw] h-[100vh] relative flex flex-col  items-center justify-center' style={style} >
            <div
               className='bg-[#00000066] absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-t from-black-200 via-black-400 to-black-600'>
            </div>
            <div
               className='absolute text-center flex flex-col justify-between  bg-black opacity-95 w-[430px]  px-14 py-11'>
               <h1 className='text-white text-2xl self-start'>{signin ? "Sign In" : "Sign Up"}</h1>
               <form className='flex flex-col' onSubmit={handleAuth}>
                  {!signin && <input
                     type="text"
                     className='text-white font-light border border-white rounded-md px-3 py-3 my-5 active:border-white focus:border-white'
                     style={inputStyle}
                     placeholder='Name'
                     name='name'
                     onChange={handleChange} />}
                  <input
                     type="email"
                     className='text-white font-light border border-white rounded-md px-3 py-3 my-5 active:border-white focus:border-white'
                     style={inputStyle}
                     placeholder='Email'
                     name='email'
                     onChange={handleChange} />
                  <input
                     type="password"
                     autoComplete=''
                     className='text-white font-light border border-white rounded-sm px-3 py-3  my-5 active:border-white focus:border-white'
                     style={inputStyle}
                     placeholder='Password'
                     name='password'
                     onChange={handleChange} />
                  <button
                     className='bg-netflix-red-100 px-8 py-3 rounded-md hover:bg-netflix-red-50 text-white text-xl font-bold my-5'
                     type='submit'>
                     {signin ? "Sign In" : "Sign Up"}
                  </button>
               </form>
               {isError && <span className='text-red-500 text-left'>Error Message</span>}
               <p
                  className="text-white text-left">
                  New to Netflix ?
                  <button
                     onClick={toggleAuth}
                     className='ml-1' >
                     {signin ? " Sign Up " : " Sign In "}  now
                  </button> .
               </p>
            </div>
         </div>
      </div>
   )
}

export default Login;