import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'
const MovieList = ({list, setList, watchedStatus, setWatchStatus}) => {
  if (list.length === 0) {
    return <div>There are no movies in the list</div>
  }
  return (
    <div>
      <button>Watched</button>
      <button>To Watch</button>
      <ul>
    {list.map((item) => (
      <MovieListEntry item={item} setList={setList} watchedStatus={watchedStatus} setWatchStatus={setWatchStatus}/>
    ))}
  </ul>
    </div>

  )
}

export default MovieList;