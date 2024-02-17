import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';


const App = (props) => {
  const { useState } = React;
  const { useEffect } = React;


  //to update user data
  const [userMovies, setUserMovies] = useState([]);

  //to update list
  const [list, setList] = useState([userMovies]);

  //uttilize useEffect hook to make a get request after App has mounted
  useEffect(() => {
    axios.get('/movies').then((response) => setUserMovies(response.data)).catch(error => {
      console.error('error getting data');
    })
  }, [])

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
    newMovie.watched = 0;
    if (!(userMovies.some((item) => item.title === newMovie.title))) {
      // setUserMovies(() => [...userMovies, newMovie]);
      axios.post('/movies', {title: newMovie.title}).then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error adding movie')
      });
      axios.get('/movies').then((response) => setUserMovies(response.data)).catch((error) => {
        console.error('Error adding movie')
      });
    }
  }

  const updateWatchedStatus = (title, newWatched) => {
    const updatedMovies = userMovies.map((movie) =>
      movie.title === title ? { ...movie, watched: newWatched } : movie
    );
    setUserMovies(updatedMovies);
  };

  //function to filter list to only watched
  const filterWatched = () => {
    let watchedMovies = userMovies.filter((movie) => movie.watched === 1);
    setList(watchedMovies);
  }

  //function to filter list to only unwatched
  const filterUnwatched = () => {
    let unwatchedMovies = userMovies.filter((movie) => movie.watched === 0);
    setList(unwatchedMovies);
  }

//Primary structure

  return (
  <div>
    <div className="title">Movie List</div>
    <AddMovie updateMovies={updateMovies}/>
    <SearchBar callBackF={search} goBack={goBack}/>
    <div>
      <button className="watched" onClick={filterWatched}>Watched</button>
      <button className="toWatch" onClick={filterUnwatched}>To Watch</button>
    </div>
    <MovieList list={list} setWatchedStatus={updateWatchedStatus}/>
  </div>
  )
};

export default App;