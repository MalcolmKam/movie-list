import React from 'react';
const MovieListEntry = ({item, setWatchedStatus}) => {
const { useState } = React;

  const toggleWatchStatus = () => {
    let newWatched = null;
    if (item.watched === 0) {
      newWatched = 1
    } else {
      newWatched = 0
    }
    setWatchedStatus(item.title, newWatched)
  };
  return (
  <li className="list">
    {item.title}
    <button id="watched" onClick={toggleWatchStatus}>
      {item.watched ? 'watched' : 'unwatched'}
    </button>
  </li>
)}

export default MovieListEntry;