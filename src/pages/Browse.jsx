import React from 'react'
import MainContainer from '../components/MainContainer';
import MoviesContainer from '../components/MoviesContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';

function Browse() {
   useNowPlayingMovies();
   usePopularMovies();
   return (
      <section>
         <MainContainer />
         <MoviesContainer />
      </section>
   )
}

export default Browse;


