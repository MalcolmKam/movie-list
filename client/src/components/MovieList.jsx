import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'
const MovieList = ({list, setList}) => (
  <ul>
    {list.map((item) => (
      <div>
        <MovieListEntry item={item} setList={setList}/>
      </div>
    ))}
  </ul>
)

export default MovieList;