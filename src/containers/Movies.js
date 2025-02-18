import React from 'react';
import SingleMovie from '../components/SingleMovie';
import { gql, useQuery } from '@apollo/client';

const listAllMovies = gql`
query{
    listmovies {
        name
        genre
        year
    }
}
`
const movies = [
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
    {
        name: "Pushpa2",
        genre: "Action",
        year:"2025"
    },
]

const Movies = () => {
    const { loading, error, data } = useQuery(listAllMovies);
     console.log(data)
     if (loading) return <p className='loading'>We are loading your movies...!</p>;
    if (error) return <p className='error'>Cannot fetch your movies! : {error.message}</p>;
    if(data.listmovies.length === 0) return <p className='no-movies'>Please add some movies first...!</p>
  return (
    <div className='movies'>
          {data.listmovies.map((movie, index) => {
             
              return <SingleMovie 
                  key= {index}
                  moviename={movie.name}
                  moviegenre={movie.genre}
                  movieyear={movie.year}
              />
      })}
    </div>
  );
}

export default Movies;
