import React, {Component} from 'react';
import {Headline} from './Headline';
import '../componentstyles/BaseComponentStyles.css';


export default class HeadlineBox extends Component {
  state = {
    headlines:this.props.headlines.length > 0 ? this.props.headlines.slice(0,3) : []
  };
  render() {
    if (this.state.headlines.length === 0) {
      return (
        <p>No Headlines</p>
      )
    }
    return (
      <div className="HeadlineBox">
        {this.state.headlines.map((headline,i) => <Headline title={headline.title} url={headline.url} source={headline.source.name} image={headline.urlToImage} key={i}/>)}
      </div>
    )
  }
}
