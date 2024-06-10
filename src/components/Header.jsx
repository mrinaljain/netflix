import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
   return (
      <nav className='bg-transparent fixed w-full z-10  mx-auto'>
         <div className='flex justify-between max-w-[66%] mx-auto items-center'>
            <img className='w-36'
               src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo" />
            <div>
               <select
                  name="LanguageSelect"
                  className='bg-transparent border border-white text-white mr-5 px-3 py-1 rounded-md'>
                  <option lang="en" label="English" value="en-IN" selected="">English</option>
                  <option lang="hi" label="हिन्दी" value="hi-IN">हिन्दी</option>
               </select>
               <Link
                  to="login"
                  className='bg-netflix-red-100 px-3 py-1 rounded-md hover:bg-netflix-red-50 text-white'>
                  Sign In
               </Link>
            </div>
         </div>


      </nav>
   )
}

export default Header;