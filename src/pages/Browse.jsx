import React from 'react'
import MainContainer from '../components/MainContainer';
import MoviesContainer from '../components/MoviesContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

function Browse() {
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
   return (
      <section>
         <MainContainer />
         <MoviesContainer />
      </section>
   )
}

export default Browse;


