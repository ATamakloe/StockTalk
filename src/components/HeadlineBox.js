import React, {Component} from 'react';
import {Headline} from './Headline';
import '../componentstyles/BaseComponentStyles.css';

export default class HeadlineBox extends Component {

  render() {
    if (this.props.headlines.length === 0) {
      return (<p>No Headlines</p>)
    }
    return (
    <div className="HeadlineBox">
      {this.props.headlines.map((headline, i) => <Headline title={headline.title} url={headline.url} source={headline.source.name} image={headline.urlToImage} key={i}/>).slice(0,3)}
    </div>)
  }
}
