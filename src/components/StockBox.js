import React, {Component} from 'react';
import HeadlineBox from './HeadlineBox';
import PriceGraph from './PriceGraph';
import stockdata from '../data/stockdata.json';
import '../componentstyles/BaseComponentStyles.css';

class StockBox extends Component {

  deleteBox = () => {this.props.deleteStockBox(this.props.name)};

  render() {
    let latestprice = this.props.chartdata.slice(0)[0][1]["4. close"];
    return (
      <div className="StockBox" tabIndex="0">
        <h2>{stockdata[this.props.name].FullName}</h2>
        <div onClick={this.deleteBox} class="close"></div>
        <p className="Ticker"> {`${this.props.name}:`} <span>{`${Number(latestprice).toFixed(2)}`}</span></p>
        <PriceGraph data={this.props.chartdata}/>
        <HeadlineBox headlines={this.props.headlines}/>
      </div>

    )
  }
}

export default StockBox
