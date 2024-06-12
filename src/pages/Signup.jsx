import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO, HERO_IMAGE } from '../utils/constants';

function Signup() {
   const style = {
      backgroundImage: "url(" + HERO_IMAGE + ")",
      backgroundSize: "cover"
   }
   const [lang, setlang] = useState("en-IN")
   return (
      <div>
         <nav className='bg-transparent fixed w-full z-10  mx-auto'>
            <div className='flex justify-between sm:max-w-[66%] mx-auto items-center px-2'>
               <img className='w-36'
                  src={LOGO} alt="netflix-logo" />
               <div>
                  <select
                     name="LanguageSelect"
                     value={lang}
                     onChange={(e) => setlang(e.target.value)}
                     className='hidden bg-transparent border border-white text-white mr-5 px-3 py-1 rounded-md'>
                     <option lang="en" label="English" value="en-IN"  >English</option>
                     <option lang="hi" label="हिन्दी" value="hi-IN" >हिन्दी</option>
                  </select>
                  <Link
                     to="login"
                     className='bg-netflix-red-100 px-3 py-1 rounded-md hover:bg-netflix-red-50 text-white'>
                     Sign In
                  </Link>
               </div>
            </div>


         </nav>
         <div className='w-[100vw] h-[100vh] relative flex flex-col  items-center justify-center' style={style} >
            <div className='bg-[#00000066] absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-t from-black-100 via-black-200 to-black-300'>
            </div>
            <div className='absolute text-center flex flex-col items-center'>
               <h1 className='text-white font-extrabold text-4xl'>Unlimited movies, TV shows and more</h1>
               <p className='text-white font-bold text-2xl'>Watch anywhere. Cancel anytime.</p>
               <h3 className='text-white text-xl' >Ready to watch? Enter your email to create or restart your membership.</h3>

               <Link
                  to="login?signup=true"
                  className='bg-netflix-red-100 px-8 py-3 rounded-md hover:bg-netflix-red-50 text-white text-xl font-bold'>
                  Sign Up
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Signup;