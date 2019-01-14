import React from 'react';
import '../componentstyles/BaseComponentStyles.css';

export const Headline = (props) => {
  return (<a href={props.url} target="_blank" rel="noopener noreferrer">
    <div className="Headlines">
      <img src={props.image} alt="Caption for article"/>
      <div className='TextAndCaption'>
        <p>{props.source}</p>
        <h3>{props.title}</h3>
      </div>
    </div>
  </a>)
}
