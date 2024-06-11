import { useEffect } from 'react'
import { addPopularMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { OPTIONS, POPULAR_MOVIES } from '../utils/constants';

function usePopularMovies() {
   const dispatch = useDispatch();
   const getPopularMovies = async () => {
      const result = await fetch(POPULAR_MOVIES, OPTIONS
      );
      const data = await result.json();
      dispatch(addPopularMovies(data.results));
   }
   useEffect(() => {
      getPopularMovies();
   }, [])
}

export default usePopularMovies