import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo';
import { BASE_URL } from '../utils/constants';
import { useSelector } from 'react-redux';
function VideoBackground(props) {
   const { id, backdrop_path, title } = props.movie;
   // custom hook to get trailer using 
   useTrailerVideo(id);
   const trailer = useSelector((state) => state.movies.trailer);
   const iframeStyle = { height: "100vh", width: "100vw" }
   return (
      <iframe
         style={iframeStyle}
         className='bg-cover object-cover top-0 bottom-0 left-0 right-0 '
         src={"https://www.youtube.com/embed/" + trailer?.key + "?controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&autoplay=1&mute=1"}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen>
      </iframe>
   )
}

export default VideoBackground;