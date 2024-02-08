import React from 'react';
const MovieListEntry = ({item, setList}) => {
const { useState } = React;
const [watched, setWatched] = useState(false);

  const toggleWatchStatus = () => {
    setWatched(!watched);
  };
  return (
  <li>
    {item.title}
    <button id="watched" onClick={toggleWatchStatus}>
      {watched ? 'watched' : 'unwatched'}
    </button>
  </li>
)}

export default MovieListEntry;