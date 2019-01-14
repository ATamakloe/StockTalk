import React from 'react';
import {HeadlineBox} from './HeadlineBox';
import {PriceGraph} from './PriceGraph';
import stockdata from '../data/stockdata.json';
import '../componentstyles/BaseComponentStyles.css';

export const StockBox = (props) => {

  const deleteBox = () => {
    props.deleteStockBox(props.name)
  };

    return (
    <div className="StockBox" tabIndex="0">
      <h2>{stockdata[props.name].FullName}</h2>
      <div onClick={deleteBox.bind(this)} class="close"></div>
      <p className="Ticker">
        {`${props.name}:`}
        <span>{`${props.currentprice}`}</span>
      </p>
      <PriceGraph data={props.chartdata}/>
      <HeadlineBox headlines={props.headlines}/>
    </div>
  )
}
