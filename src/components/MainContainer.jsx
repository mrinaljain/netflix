import React from 'react'
import { BASE_URL, HERO_IMAGE } from '../utils/constants'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
function MainContainer() {
   const nowPlayingMovies = useSelector((state) => state?.movies?.nowPlayingMovies);
   // Early return
   if (!nowPlayingMovies) return;
   // Early return
   const mainMovie = nowPlayingMovies[0];
   return (
      <div className='relative'>
         <VideoBackground movie={mainMovie} />
         <VideoTitle movie={mainMovie} />
      </div>
   )
}

export default MainContainer