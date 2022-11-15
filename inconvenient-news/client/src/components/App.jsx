import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import newsApiData from './testData.jsx';
import NewsCard from './NewsCard.jsx';

const testData = [  {
  "source": {
      "id": "engadget",
      "name": "Engadget"
  },
  "author": "Devindra Hardawar",
  "title": "Biden admin awards $2.8 billion to ramp up US EV battery production",
  "description": "The Department of Energy is awarding $2.8 billion in grants to 20 companies across the US that will promote the production of materials to make EV batteries domestically, the Biden administration announced today. The funding comes from the Bipartisan Infrastr…",
  "url": "https://www.engadget.com/biden-doe-2-8-billion-ev-battery-mineral-production-190544545.html",
  "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/fffc4cb0-3456-11ed-a736-ee6a2a876ddf",
  "publishedAt": "2022-10-19T19:05:44Z",
  "content": "The Department of Energy is awarding $2.8 billion in grants to 20 companies across the US that will promote the production of materials to make EV batteries domestically, the Biden administration ann… [+1638 chars]"
},
{
  "source": {
      "id": "engadget",
      "name": "Engadget"
  },
  "author": "Karissa Bell",
  "title": "Joe Biden says Elon Musk’s ‘relationships’ with other countries should be ‘looked at’",
  "description": "President Joe Biden says that Elon Musk’s dealings with countries outside of the United States are “worthy of being looked at.” Speaking to reporters, Biden didn’t elaborate on if some kind of of investigation was underway, but suggested the Tesla and Twitter…",
  "url": "https://www.engadget.com/joe-biden-elon-musk-relationships-to-other-countries-looked-at-234044046.html",
  "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/bed86410-6086-11ed-bead-ae7a52706016",
  "publishedAt": "2022-11-09T23:40:44Z",
  "content": "President Joe Biden says that Elon Musks dealings with countries outside of the United States are worthy of being looked at. Speaking to reporters, Biden didnt elaborate on if some kind of of investi… [+1501 chars]"
},
{
  "source": {
      "id": "cnn",
      "name": "CNN"
  },
  "author": "Julian Zelizer",
  "title": "Opinion: What people got wrong about Biden",
  "description": "The midterms make clear that Biden is a much stronger president than he is often given credit for, writes Julian Zelizer. After two years of speculation about whether Biden should run for a second term, the outcome should also give Democrats reason to believe…",
  "url": "https://www.cnn.com/2022/11/10/opinions/biden-midterms-underestimated-zelizer/index.html",
  "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221110124532-05-joe-biden-white-house-1109.jpg?c=16x9&q=w_800,c_fill",
  "publishedAt": "2022-11-10T21:56:33Z",
  "content": "Editors Note: Julian Zelizer, a CNN political analyst, is a professor of history and public affairs at Princeton University. He is the author and editor of 24 books, including, The Presidency of Dona… [+7449 chars]"
},
{
  "source": {
      "id": "bbc-news",
      "name": "BBC News"
  },
  "author": "https://www.facebook.com/bbcnews",
  "title": "US midterms: Biden warns election denial is 'path to chaos'",
  "description": "The president urges US voters to unite in opposition to \"political violence\" in next week's midterms.",
  "url": "https://www.bbc.co.uk/news/world-us-canada-63494618",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17D5D/production/_127492679_biden.jpg",
  "publishedAt": "2022-11-03T02:35:01Z",
  "content": "US President Joe Biden has warned any candidates who refuse to accept defeat in next week's midterm elections could set the nation on \"the path to chaos\".\r\nHe also urged Americans to unite in opposit… [+3434 chars]"
},
{
  "source": {
      "id": "bbc-news",
      "name": "BBC News"
  },
  "author": null,
  "title": "Biden chuckles at thought of Trump running again",
  "description": "The US president was asked what he would tell foreign leaders about Donald Trump's potential run.",
  "url": "https://www.bbc.co.uk/news/av/world-us-canada-63578645",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BD49/production/_127575484_p0df3rjk.jpg",
  "publishedAt": "2022-11-09T21:41:33Z",
  "content": "Biden chuckles at thought of Trump running again. Video, 00:00:27Biden chuckles at thought of Trump running again"
},
{
  "source": {
      "id": null,
      "name": "Gizmodo.com"
  },
  "author": "Matt Novak",
  "title": "Elon Musk to Cut Twitter Staff by 75% as Biden Worries Deal Threatens National Security",
  "description": "Elon Musk plans to cut Twitter’s workforce by almost 75% after he finalizes the deal to buy the social media company, a move that’s likely to cause chaos among employees, according to a new report from the Washington Post. And that’s to say nothing of Musk’s …",
  "url": "https://gizmodo.com/elon-musk-75-twitter-starlink-national-security-china-1849685481",
  "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6672874de9db0dc0eab2aa7fd33bcf1a.jpg",
  "publishedAt": "2022-10-21T10:00:00Z",
  "content": "Elon Musk plans to cut Twitters workforce by almost 75% after he finalizes the deal to buy the social media company, a move thats likely to cause chaos among employees, according to a new report from… [+4282 chars]"
},
{
  "source": {
      "id": null,
      "name": "Gizmodo.com"
  },
  "author": "Molly Taft",
  "title": "Biden to Release More Oil From U.S. Stockpile Held in Salt Caves",
  "description": "On Wednesday, the Biden administration announced that it would pull an additional 15 million barrels of oil out of the nation’s Strategic Petroleum Reserve (SPR) to help juice up oil supplies and keep gas prices low in the face of the global energy crisis.Rea…",
  "url": "https://gizmodo.com/biden-strategic-petroleum-reserve-release-1849677052",
  "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9f643a1700d7e8559c8ae39226973342.jpg",
  "publishedAt": "2022-10-19T19:25:42Z",
  "content": "On Wednesday, the Biden administration announced that it would pull an additional 15 million barrels of oil out of the nations Strategic Petroleum Reserve (SPR) to help juice up oil supplies and keep… [+2804 chars]"
}];

const App = () => {
  const [keyword, setKeyword] = useState(null);
  const [allNews, setNews] = useState(null);
  const [showLeftArrow, setLeftArrow] = useState(true);
  const [showRightArrow, setRightArrow] = useState(true);

  const prevHandler = () => {
    let prevSlide = document.getElementById('slider');
    prevSlide.scrollLeft -= slideWindow;
    console.log(prevSlide.scrollLeft)
    if (prevSlide.scrollLeft === 0) {
      setLeftArrow(false);
    }
    setRightArrow(true);
  }
  const nextHandler = () => {
    let nextSlide = document.getElementById('slider');
    nextSlide.scrollLeft += slideWindow;
    console.log(nextSlide.scrollLeft);
    console.log(nextSlide.scrollWidth, nextSlide.clientWidth)
    setLeftArrow(true);
    if (nextSlide.scrollLeft >= (nextSlide.scrollWidth - nextSlide.clientWidth)) {
      setRightArrow(false);
    }
  }

  const searchWordHandler = (e) => {
    setKeyword(e.target.value)
  }

  const onSearch = () => {
    console.log(keyword);
    // axios.get(`/news`, {params: {keyWord: keyword}})
    // .then(data => {})
    setKeyword('');

  }
  useEffect(() => {

  }, [keyword])

  return (
    <div>
      <div className='logo'>
        <h1>Inconvenient News</h1>
      </div>
      <div className='tag-div'>Take A Guess</div>
      <div className='search-bar'>
        <input className='search-word' placeholder='enter search word here' onChange={searchWordHandler}></input>
        <button className='search-button' onClick={onSearch}>search</button>
      </div>
      <h2 className='searched-news'>Searched News</h2>
      <div className='news-section'>
        {testData.map((ele, indx) => {
          return <NewsCard key={indx} news={ele}/>})}
      </div>

    </div>
  )
}

export default App;