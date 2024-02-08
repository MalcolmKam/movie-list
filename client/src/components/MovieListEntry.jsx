import React from 'react';
const MovieListEntry = ({item, setList, watchedStatus, setWatchStatus}) => {

  return (
  <li>
    {item.title}
    <button id="watched" onClick={() => setWatchStatus(!watchedStatus)}>
      {watchedStatus ? 'watched' : 'unwatched'}
    </button>
  </li>
)}

export default MovieListEntry;