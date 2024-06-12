import React, { useRef } from 'react'
import { HERO_IMAGE, OPTIONS, SEARCH_MOVIES } from '../utils/constants';
import openai from '../utils/openai';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchItems } from '../utils/searchSlice';
import SearchResults from '../components/SearchResults';
function GptSearch() {
   const searchText = useRef(null)
   const dispatch = useDispatch();
   const style = {
      backgroundImage: "url(" + HERO_IMAGE + ")",
      backgroundSize: "cover"
   }
   async function searchMovies(movie) {
      try {
         const result = await fetch(SEARCH_MOVIES + movie, OPTIONS);
         const data = await result.json();
         return data.results;
      } catch (error) {
         console.log(error.message);
      }


   }
   async function haldleGptSearch(e) {
      e.preventDefault();
      let searchQuerry = "As a movie recommendation system suggest  5 comma seperated movie names for the following querry " + searchText.current.value + "and keep result as a string without numbering for example : 'movie, anothermovie, someother' ";
      const chatCompletion = await openai.chat.completions.create({
         messages: [{ role: 'user', content: searchQuerry }],
         model: 'gpt-3.5-turbo',
      });
      const suggestedMoviesString = chatCompletion.choices[0].message.content;

      const suggestedMoviesArray = suggestedMoviesString.split(",");
      // call the search api for all the movies array
      const promisesArray = suggestedMoviesArray.map((item) => searchMovies(item));
      // map will return us the array of promises
      const promiseReslut = await Promise.all(promisesArray);
      // dispatch
      dispatch(addSearchItems(promiseReslut));
   }
   return (
      <div
         style={style}
         className='w-[100vw] h-[100vh] relative flex  justify-center items-start'>
         <div
            className='bg-[#00000066] absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-t from-black-100 via-black-200 to-black-300'>
         </div>
         <div className='absolute left-0 top-32 right-0'>
            <div className='w-[60%] bg-netflix-bg px-4 py-4 rounded-md mx-auto'>
               <form
                  onSubmit={haldleGptSearch}
                  className='grid grid-cols-12'>
                  <input
                     ref={searchText}
                     className='px-4 py-2 rounded-l-md col-span-9 active:border-none focus:border-none'
                     type="text"
                     placeholder='Search for movies here .......' />
                  <button
                     className='bg-netflix-red-100 px-4 py-2 rounded-r-md hover:bg-netflix-red-50 text-white col-span-3'> Search
                  </button>
               </form>
            </div>

            <SearchResults />
         </div>
      </div>

   )
}

export default GptSearch;