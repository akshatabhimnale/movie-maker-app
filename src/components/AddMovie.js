import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const listAllMovies = gql`
query{
    listmovies {
        name
        genre
        year
    }
}
`
const addNewMovie = gql`
    mutation AddNewMovie($name:String!,$genre:String!,$year:String!){
        addMovie(name: $name, genre:$genre, year: $year){
            name
            genre
            year
        }
    }
`


const AddMovie = () => {
    const [newMovieData, { data, loading, error }] = useMutation(addNewMovie);

    const [movieName, setMovieName] = useState('')
    const [movieGenre, setMovieGenre] = useState('')
     const [movieYear,setMovieYear] = useState('')
  if (loading) return <p className='loading'>Submitting your movie...</p>;
    if (error) return <p className='error'>Cannot add movie...!`${error.message}`</p>;
    
    const submitMovie = (e) => {
        e.preventDefault()
        newMovieData({
            variables: {
                name: movieName,
                genre: movieGenre,
                year:movieYear
            },
            refetchQueries: [{
                query:listAllMovies
            }]
        })
    }
    
  return (
    <div className='addMovie' id='addMovie'>
          <form onSubmit={submitMovie}>
              <input type='text' placeholder='Movie Name' required onChange={(e)=>{setMovieName(e.target.value)}}/>
              <input type='text' placeholder='Movie Genre' required onChange={(e)=>{setMovieGenre(e.target.value)}}/>
              <input type='text' placeholder='Movie Year' onChange={(e)=>{setMovieYear(e.target.value)}}/>
              <button>Add Movie</button>
          </form>
          <div className='top'>
              <Link smooth={true} to="header" className='top-button'>Back To Top</Link>
          </div>
    </div>
  );
}

export default AddMovie;
