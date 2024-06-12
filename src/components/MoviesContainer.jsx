import React from 'react'

import { useSelector } from 'react-redux';
import MovieSlider from './MovieSlider';
function MoviesContainer() {

   const movies = useSelector((state) => state?.movies);
   const nowPlayingMovies = movies?.nowPlayingMovies;
   const popularMovies = movies?.popularMovies;
   const topRatedMovies = movies?.topRatedMovies;
   const upcomingMovies = movies?.upcomingMovies;
   return (
      <div className='bg-netflix-bg'>
         <div className='sm:-mt-48 pl-2 sm:pl-10 relative z-10'>
            <MovieSlider title="Now Playing Movies" movies={nowPlayingMovies} />
            <MovieSlider title="Popular Movies" movies={popularMovies} />
            <MovieSlider title="Top Rated Movies" movies={topRatedMovies} />
            <MovieSlider title="Upcoming Movies" movies={upcomingMovies} />
         </div>
      </div>
   )
}

export default MoviesContainer