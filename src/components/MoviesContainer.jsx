import React from 'react'

import { useSelector } from 'react-redux';
import MovieSlider from './MovieSlider';
function MoviesContainer() {

   const movies = useSelector((state) => state?.movies);
   const nowPlayingMovies = movies?.nowPlayingMovies;
   const popularMovies = movies?.popularMovies;
   return (
      <div className='bg-netflix-bg'>
         <div className='-mt-48 pl-10 relative z-10'>
            <MovieSlider title="Now Playing Movies" movies={nowPlayingMovies} />
            <MovieSlider title="Popular Movies" movies={popularMovies} />
         </div>
      </div>
   )
}

export default MoviesContainer