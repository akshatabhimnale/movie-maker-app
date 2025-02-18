import React from 'react';

const SingleMovie = (props) => {
  return (
    <div className='card'>
          <div className='container'>
              <h2>{props.moviename }</h2>
              <h4>{props.moviegenre}</h4>
              <h4>{props.movieyear }</h4>
      </div>
    </div>
  );
}

export default SingleMovie;
