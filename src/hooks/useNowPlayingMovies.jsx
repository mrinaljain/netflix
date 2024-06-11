import { useEffect } from 'react'
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { NOW_PLAYING, OPTIONS } from '../utils/constants';

function useNowPlayingMovies() {
   const dispatch = useDispatch();
   const getNowPlayingMovies = async () => {
      const result = await fetch(NOW_PLAYING, OPTIONS
      );
      const data = await result.json();
      dispatch(addNowPlayingMovies(data.results));
   }
   useEffect(() => {
      getNowPlayingMovies();
   }, [])
}

export default useNowPlayingMovies