import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

function TagCard (props) {
  const [source, setSource] = useState(null);
  const [title, setTitle] = useState(null);
  const [descp, setDescp] = useState(null);
  const [bias, setBias] = useState(null);

  useEffect(() => {
    setBias(props.news.bias);
    setSource(props.news.source);
    setTitle(props.news.title);
    setDescp(props.news.description);
  }, [])

  return (
    <div className='tag-card'>
        <p className='tag-title'>{title}</p>
        <p className='tag-descp'>{descp}</p>
    </div>
  )
}

export default TagCard;