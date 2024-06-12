import React from 'react'
import { useSelector } from 'react-redux';
import MovieSlider from "../components/MovieSlider"
function SearchResults() {
   const suggestedMovies = useSelector(state => state.search);
   return (
      <div className='w-[95%] bg-black bg-opacity-80 mx-auto p-5 mt-10 rounded-md'>
         <div className='flex flex-wrap gap-4'>
            {suggestedMovies?.map((movies, index) => <MovieSlider key={index} movies={movies} />)}
         </div>
      </div>
   )
}

export default SearchResults;