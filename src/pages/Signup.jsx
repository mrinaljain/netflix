import React from 'react';
import Header from "../components/Header"
import { Link } from 'react-router-dom';

function Signup() {
   const style = {
      backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      backgroundSize: "cover"
   }
   return (
      <div>
         <Header />
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