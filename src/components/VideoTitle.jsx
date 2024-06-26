import React from 'react'

function VideoTitle(props) {
   const { title, overview } = props.movie;
   return (

      <div className='absolute bottom-0 sm:bottom-[37%] left-12 sm:max-w-[25%]'>
         <h1 className='text-white text-sm  sm:text-3xl font-bold'>{title}</h1>
         <p className='text-white text-l line-clamp-3 leading-snug my-4 font-light hidden sm:block'>{overview}</p>
         <div className='flex-row gap-4 hidden sm:flex'>
            <button className='bg-white px-6 py-2 rounded-md text-xl hover:bg-opacity-70'> &#9658; Play</button>
            <button className='bg-gray-400 px-6 py-2 rounded-md text-xl text-white'> &#9432; More Info</button>
         </div>
      </div>

   )
}

export default VideoTitle;

