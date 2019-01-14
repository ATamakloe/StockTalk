import React from 'react';
import {Headline} from './Headline';
import '../componentstyles/BaseComponentStyles.css';

export const HeadlineBox = (props) => {
  return props.headlines.length === 0
    ? <p>No Headlines</p>
    : <div className="HeadlineBox">
      {props.headlines.map((headline, i) => <Headline title={headline.title} url={headline.url} source={headline.source.name} image={headline.urlToImage} key={i}/>)}
    </div>
}
