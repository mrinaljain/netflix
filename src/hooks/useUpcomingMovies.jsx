import { useEffect } from 'react'
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { UPCOMING_MOVIES, OPTIONS } from '../utils/constants';

function useUpcomingMovies() {
   const dispatch = useDispatch();
   const getUpcomingMovies = async () => {
      const result = await fetch(UPCOMING_MOVIES, OPTIONS
      );
      const data = await result.json();
      dispatch(addUpcomingMovies(data.results));
   }
   useEffect(() => {
      getUpcomingMovies();
   }, [])
}

export default useUpcomingMovies;