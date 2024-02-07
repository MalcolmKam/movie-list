import React from 'react';

const AddMovie = ({updateMovies}) => {
  return (
    <>
      <input id="addMovie"/>
      <button onClick={updateMovies}>Add a Movie!</button>
    </>

  )
}

export default AddMovie;