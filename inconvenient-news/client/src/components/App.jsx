import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Search from './Search.jsx';
import Tag from './Tag.jsx';

const App = () => {
  const navigate = useNavigate();

  const navigateToTag = () => {
    navigate('/guess')
  };

  const navigateToSearch = () => {
    navigate('/search')
  }

  return (
    <div>
      <div className='logo'>
        <h1>Inconvenient News</h1>
      </div>
      <button className='home-div' onClick={navigateToSearch}>Search</button>
      <button className='guess-div' onClick={navigateToTag}>Take A Guess</button>

      <Routes>
        <Route path='/search' element={<Search />}/>
        <Route path='/guess' element={<Tag />} />
      </Routes>

    </div>
  )
}

export default App;