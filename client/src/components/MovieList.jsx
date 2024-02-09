import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'
const MovieList = ({list, setWatchedStatus}) => {
  if (list.length === 0) {
    return <div class="noResult">There are no movies in the list</div>
  }
  return (
    <div>
      <ul>
        {list.map((item) => (
          <MovieListEntry item={item} setWatchedStatus={setWatchedStatus}/>
        ))}
      </ul>
    </div>

  )
}

export default MovieList;