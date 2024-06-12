import { useEffect } from 'react'
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NOW_PLAYING, OPTIONS } from '../utils/constants';

function useNowPlayingMovies() {
   const dispatch = useDispatch();
   //final optimization , we will check is movies alredy in store then do not make API call
   const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

   const getNowPlayingMovies = async () => {
      const result = await fetch(NOW_PLAYING, OPTIONS
      );
      const data = await result.json();
      dispatch(addNowPlayingMovies(data.results));
   }
   useEffect(() => {
      if (!nowPlayingMovies) {
         getNowPlayingMovies();
      }
   }, [])
}

export default useNowPlayingMovies