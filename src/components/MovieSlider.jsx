import React from 'react'
import MovieCard from './MovieCard';

function MovieSlider({ title, movies }) {

   return (
      <div>
         <h2 className='text-2xl text-white'>{title}</h2>
         <div className='flex flex-row flex-nowrap overflow-x-scroll no-scrollbar gap-2 w-[100vw]'>
            {movies?.map((movie, index) => <MovieCard key={movie.id} data={movie} />)}
         </div>
      </div>
   )
}

export default MovieSlider;