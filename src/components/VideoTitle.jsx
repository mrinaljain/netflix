import React from 'react'

function VideoTitle(props) {
   const { title, overview } = props.movie;
   return (

      <div className='absolute bottom-[37%] left-12 max-w-[25%]'>
         <h1 className='text-white text-3xl font-bold'>{title}</h1>
         <p className='text-white text-l line-clamp-3 leading-snug my-4 font-light'>{overview}</p>
         <div className='flex flex-row gap-4'>
            <button className='bg-white px-6 py-2 rounded-md text-xl hover:bg-opacity-70'> &#9658; Play</button>
            <button className='bg-gray-400 px-6 py-2 rounded-md text-xl text-white'> &#9432; More Info</button>
         </div>
      </div>

   )
}

export default VideoTitle;

