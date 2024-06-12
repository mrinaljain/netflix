import React from 'react';
import { BASE_URL, FILE_SIZE } from '../utils/constants';
import { Link } from 'react-router-dom';

function MovieCard(props) {
   const { original_title, poster_path, backdrop_path, title } = props.data;
   return (
      <Link className='min-w-[18%] w-[18%] rounded-md'>
         <img
            className='rounded-md '
            src={BASE_URL + FILE_SIZE.w500 + backdrop_path} alt="" />
      </Link>
   );
}

export default MovieCard;
