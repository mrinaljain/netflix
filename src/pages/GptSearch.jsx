import React from 'react'
import { HERO_IMAGE } from '../utils/constants';

import SearchResults from '../components/SearchResults';
import SearchInput from '../components/SearchInput';
function GptSearch() {
   const style = {
      backgroundImage: "url(" + HERO_IMAGE + ")",
      backgroundSize: "cover"
   }
   return (
      <div
         style={style}
         className='w-[100vw] h-[100vh] relative flex  justify-center items-start'>
         <div
            className='bg-[#00000066] absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-t from-black-100 via-black-200 to-black-300'>
         </div>
         <div className='absolute left-0 top-32 right-0'>
            <SearchInput />
            <SearchResults />
         </div>
      </div>

   )
}

export default GptSearch;