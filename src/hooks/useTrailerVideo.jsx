import { useEffect } from 'react'
import { OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/moviesSlice';
function useTrailerVideo(id) {

   const dispatch = useDispatch();
   const getMovieVideos = async () => {
      const result = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos", OPTIONS);
      const data = await result.json();
      const trailers = data.results;
      let filteredTrailers = trailers.filter((trailer) =>
         trailer.type === "Trailer"
      );
      if (filteredTrailers.length > 0) {
         dispatch(addTrailer(filteredTrailers[0]));
      } else {
         dispatch(addTrailer(trailers[0]))
      }
   }
   useEffect(() => {
      getMovieVideos();
   }, []);
}

export default useTrailerVideo;