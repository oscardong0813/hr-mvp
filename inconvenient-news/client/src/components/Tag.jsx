import React from 'react';
import axios from 'axios';
import { useState, useEffect, useNavigate } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TagCard from './TagCard.jsx';

const testData = [{
  "bias": "middle",
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
  "bias": "left",
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
  "bias": "lean left",
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
  "bias": "right",
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
  "bias": "lean right",
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
}];

const Tag = () => {
  const [newsPool, setNewsPool] = useState(testData);
  const [left, setLeft] = useState([]);
  const [middle, setMiddle] = useState([]);
  const [right, setRight] = useState([]);

  const dragEndHandler = (result) => {
    if (!result.destination) return;
    console.log(result);
    const items = Array.from(newsPool);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setTest(items);

  }

  return (
    <div>
      <h2> tag something</h2>
      <DragDropContext className='drop-section' onDragEnd={dragEndHandler}>
        <Droppable droppableId='newsPool' direction='horizontal'>
          {(provided) => (
            <div className='news-pool'>
              <ul className='tag-section' {...provided.droppableProps} ref={provided.innerRef}>
                {newsPool.map((ele, indx) => {
                  return (
                    <Draggable key={ele.bias} draggableId={ele.bias} index={indx}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TagCard news={ele} />
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            </div>

          )}
        </Droppable>
        <div className='bias-section'>
          <ul className='left'>
              <li>left</li>
           </ul>
        <ul className='middle'>
          <li>middle</li>
        </ul>
        <ul className='right'>
          <li>right</li>
        </ul>
        </div>

      </DragDropContext>
    </div>
  )
}

export default Tag;