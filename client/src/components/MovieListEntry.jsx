import React from 'react';
const MovieListEntry = ({item, setWatchedStatus}) => {
const { useState } = React;

  const toggleWatchStatus = () => {
    let newWatched = !item.watched
    setWatchedStatus(item.title, newWatched)
  };
  return (
  <li class="list">
    {item.title}
    <button id="watched" onClick={toggleWatchStatus}>
      {item.watched ? 'watched' : 'unwatched'}
    </button>
  </li>
)}

export default MovieListEntry;