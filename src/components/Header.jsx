import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
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
   function togleSideBar() { }
   return (
      <header className='flex justify-between items-center w-full bg-transparent fixed top-0 px-3 z-10 bg-gradient-to-b from-slate-900  to-transparent'>
         <button
            onClick={togleSideBar}
            className='text-white text-xl'
         >
            &#9827;
         </button>
         <img className='w-24 sm:w-36 mx-auto'
            src={LOGO} alt="netflix-logo" />
         <nav className=' items-center mr-auto gap-3 ml-3 hidden sm:flex'>
            <NavLink className="text-white font-thin" to={"/browse"} >Home</NavLink>
            <NavLink className="text-white font-thin">TV Shows</NavLink>
            <NavLink className="text-white font-thin">Movies</NavLink>
            <NavLink className="text-white font-thin">New & Popular</NavLink>
            <NavLink className="text-white font-thin">My List</NavLink>
            <NavLink className="text-white font-thin">Browse by Languages</NavLink>
         </nav>
         <div className='flex items-center gap-5'>
            <Link
               to="gptsearch"
               className='flex items-center justify-center w-7 h-7 rounded-full bg-purple-300 text-center'
            >🔍</Link>
            <span className='text-white mr-2 hidden sm:inline'> {store?.displayName}</span>
            <button className='hidden sm:flex'>🔔</button>
            <img
               className='w-7 rounded-md hidden sm:inline'
               src={store?.photoURL} />
            <button
               className='bg-netflix-red-100 px-1 sm:px-2 sm:py-1 rounded-md hover:bg-netflix-red-50 text-white font-light'
               onClick={handleSignOut}>
               Sign Out
            </button>
         </div>
      </header>
   )
}

export default Header;