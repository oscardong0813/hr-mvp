import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import newsApiData from './testData.jsx';

function App () {
  const [keyword, setKeyword] = useState(null);
  const [news, setNews] = useState(null);
  const searchWordHandler = (e) => {
    setKeyword(e.target.value)
  }

  const onSearch = () => {
    axios.get(`/news`, {params: {keyWord: keyword}})
    .then(data => {
      setNews(newsApiData);
    })
  }

  useEffect(() => {
    console.log(keyword)
  },[keyword])
  console.log(newsApiData)
  return (
    <div>
      <div className='logo'>
        <h1>Inconvenient News</h1>
      </div>
      <div className='tag-div'>Take A Guess</div>
      <div className='search-bar'>
        <input className='search-word' placeholder='enter search word here' onChange={searchWordHandler}></input>
        <button className='search-button'>search</button>
      </div>
      <div className='news-section'>
      </div>

    </div>
  )
}

export default App;