import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

function NewsCard (props) {
  const [source, setSource] = useState(null);
  const [auth, setAuth] = useState(null);
  const [title, setTitle] = useState(null);
  const [descp, setDescp] = useState(null);
  const [url, setUrl] = useState(null);
  const [date, setDate] = useState(null);
  const [content, setContent] = useState(null);
  const [flip, setFlip] = useState(false);

  const flipHandler = () => {
    setFlip(!flip);
  }

  useEffect(() => {
    setSource(props.news.source);
    setAuth(props.news.author);
    setTitle(props.news.title);
    setDescp(props.news.description);
    setUrl(props.news.url);
    setDate(props.news.publishedAt);
    setContent(props.news.content);
    console.log('inside newscard');
  }, [])

  return (
    <div className={`news-card ${flip ? 'flip' : ''}`} onClick={flipHandler}>
      <div className='front'>
        <p className='news-title'>{title}</p>
        <p className='news-author'>{auth}</p>
        <p className='news-descp'>{descp}</p>
        <p className='news-date'>{date}</p>
      </div>
      <div className='back' onClick={flipHandler}>
        <img src={require(`./assets/cnn.png`).default} className='news-source'/>
        {/* {source && <img src={require(`./assets/${source.id}.png`).default} />} */}
      </div>
    </div>
  )
}

export default NewsCard;