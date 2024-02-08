import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';


const App = (props) => {
  const { useState } = React;
  const { useEffect } = React;


  //to update user data
  const [userMovies, setUserMovies] = useState([]);

  //to update list
  const [list, setList] = useState([userMovies]);

  //create a useEffect so that the setList updates whenever userMovies updates
  useEffect(() => {
    setList(userMovies)
  }, [userMovies]);

  //add function to allow search button to change rendered list
  const search = () => {
    let inputVal = document.getElementById("form-control").value;
    if (!inputVal) {
      setList(userMovies);
    }
    //return new list containing all movies that match search regardless of capitalization
    let filtered = userMovies.filter((item) => item.title.toUpperCase().indexOf(inputVal.toUpperCase()) !== -1)
    if (filtered.length > 0) {
      setList(filtered);
    } else {
      alert('Sorry! No matching results found')
    }
  };

  //add a back button to return to main list
  const goBack = () => setList(userMovies);

  //create a function to update userMovie list
  const updateMovies = () => {
    let newMovie = {};
    let inputVal = document.getElementById("addMovie").value;
    newMovie.title = inputVal;
    newMovie.watched = false;
    if (!(userMovies.some((item) => item.title === newMovie.title))) {
      setUserMovies((userMovies) => [...userMovies, newMovie]);
    }
  }

  //create a toggle for watched status
  const [watchedStatus, setWatchStatus] = useState(false);

  // const toggleWatchStatus = (movie) => {
  //   setWatchStatus(!watchedStatus);
  //   return movie.watch = !movie.watch;
  // }

  const toggleWatchStatus = (index) => {
    const updatedMovies = [...userMovies];
    updatedMovies[index].watched = !updatedMovies[index].watched;
    setUserMovies(updatedMovies);
  };

//Primary structure

  return (
  <div>
    <div className="title">Movie List</div>
    <AddMovie updateMovies={updateMovies}/>
    <SearchBar callBackF={search} goBack={goBack}/>
    <MovieList list={list} setList={setList} watchedStatus={watchedStatus} setWatchStatus={setWatchStatus}/>
  </div>
  )
};

export default App;