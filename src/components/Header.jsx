import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
   const [name, setName] = useState("")
   const navigate = useNavigate();
   const store = useSelector((store) => store.user)
   function handleSignOut() {
      signOut(auth).then(() => {
         // Sign-out successful.
         // dispatch(removeUser());
         navigate("/");
      }).catch((error) => {
         // An error happened.
         console.log(
            error.messsage
         );
         navigate("/error");
      });
   }





   return (
      <header className='flex justify-between items-center w-full bg-transparent sticky top-0 bg-gradient-to-b from-black to-white px-2'>
         <img className='w-36'
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo" />
         <nav className='flex items-center mr-auto gap-3 ml-3'>
            <NavLink >Home</NavLink>
            <NavLink>TV Shows</NavLink>
            <NavLink>Movies</NavLink>
            <NavLink>New & Popular</NavLink>
            <NavLink>My List</NavLink>
            <NavLink>Browse by Languages</NavLink>
         </nav>
         <div className='flex items-center gap-5'>
            <span className='text-white mr-2'> {store.displayName}</span>
            <img
               className='w-10 rounded-full'
               src={store.photoURL} />
            <button
               className='bg-netflix-red-100 px-3 py-1 rounded-md hover:bg-netflix-red-50 text-white'
               onClick={handleSignOut}>
               Sign Out
            </button>
         </div>
      </header>
   )
}

export default Header;