import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx'

var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

var userMovies = [];


const App = (props) => {
  const { useState } = React;

  const [list, setList] = useState(userMovies);

  //add function to allow search button to change rendered list
  const search = () => {
    let inputVal = document.getElementById("form-control").value;
    if (!inputVal) {
      setList(userMovies);
    }
    //return new list containing all movies that match search regardless of capitalization
    let filtered = list.filter((item) => item.title.toUpperCase().indexOf(inputVal.toUpperCase()) !== -1)
    if (filtered.length > 0) {
      setList(filtered);
    } else {
      setList([{title: 'Sorry, no results found matching search'}])
    }
  };

  //add a back button to return to main list
  const goBack = () => setList(userMovies);

  //create a function to update userMovie list
  const updateMovies = () => {
    let newMovie = {};
    let inputVal = document.getElementById("addMovie").value;
    newMovie.title = inputVal;
    if (!(userMovies.some((item) => item.title === newMovie.title))) {
      userMovies.push(newMovie);
    }
  }

  return (
  <div>
    <div className="title">Movie List</div>
    <AddMovie updateMovies={updateMovies}/>
    <SearchBar callBackF={search} goBack={goBack}/>
    <MovieList list={list} setList={setList}/>
  </div>
  )
};

export default App;