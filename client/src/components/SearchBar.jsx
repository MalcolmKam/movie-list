import React from 'react';

const SearchBar = ({callBackF, goBack}) => {
  return (
    <div>
      <input type="text" id="form-control"/>
      <button onClick={callBackF}>Go!</button>
      <button onClick={goBack}>Back</button>
    </div>
  )
}

export default SearchBar;