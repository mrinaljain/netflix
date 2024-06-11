import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { LOGO } from '../utils/constants';
function Header() {
   const [name, setName] = useState("")
   const store = useSelector((store) => store.user)
   function handleSignOut() {
      signOut(auth).then(() => {
         // Sign-out successful.
         // dispatch(removeUser());
      }).catch((error) => {
         // An error happened.

      });
   }
   return (
      <header className='flex justify-between items-center w-full bg-transparent fixed top-0 px-2 z-10 bg-gradient-to-b from-slate-900  to-transparent'>
         <img className='w-36'
            src={LOGO} alt="netflix-logo" />
         <nav className='flex items-center mr-auto gap-3 ml-3'>
            <NavLink className="text-white font-thin" >Home</NavLink>
            <NavLink className="text-white font-thin">TV Shows</NavLink>
            <NavLink className="text-white font-thin">Movies</NavLink>
            <NavLink className="text-white font-thin">New & Popular</NavLink>
            <NavLink className="text-white font-thin">My List</NavLink>
            <NavLink className="text-white font-thin">Browse by Languages</NavLink>
         </nav>
         <div className='flex items-center gap-5'>
            <button>🔍</button>
            <span className='text-white mr-2'> {store?.displayName}</span>
            <button>🔔</button>
            <img
               className='w-7 rounded-md'
               src={store?.photoURL} />
            <button
               className='bg-netflix-red-100 px-2 py-1 rounded-md hover:bg-netflix-red-50 text-white font-light'
               onClick={handleSignOut}>
               Sign Out
            </button>
         </div>
      </header>
   )
}

export default Header;