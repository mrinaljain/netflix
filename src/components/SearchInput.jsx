import React, { useRef } from 'react'
import { OPTIONS, SEARCH_MOVIES } from '../utils/constants';
import openai from '../utils/openai';
import { useDispatch } from 'react-redux';
import { addSearchItems } from '../utils/searchSlice';

function SearchInput() {
   const searchText = useRef(null)
   const dispatch = useDispatch();
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
      let searchQuerry = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value +
         ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
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
   )
}

export default SearchInput;