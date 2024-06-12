import { useEffect } from 'react'
import { addTopRatedMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { TOP_RATED, OPTIONS } from '../utils/constants';

function useTopRatedMovies() {
   const dispatch = useDispatch();
   const getTopRatedMovies = async () => {
      const result = await fetch(TOP_RATED, OPTIONS
      );
      const data = await result.json();
      dispatch(addTopRatedMovies(data.results));
   }
   useEffect(() => {
      getTopRatedMovies();
   }, [])
}

export default useTopRatedMovies