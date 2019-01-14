import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import {StockBox} from './components/StockBox';
import stockdata from './data/stockdata.json';
import './componentstyles/BaseComponentStyles.css';

import {getDataFromAPI} from './helpers/getDataFromAPI'

const APIKEY = {
  StockAPI: process.env.REACT_APP_STOCKAPIKEY,
  NewsAPI: process.env.REACT_APP_NEWSAPIKEY
};

class App extends Component {
  state = {
    chartandnews: []
  };

  MakeApiCalls = async (term) => {
    //Check to make the ticker is valid
    term = term.toUpperCase();
    if (!stockdata[term]) {
      alert("Ticker name invalid, make sure you're using the correct abbreviation");
      return
    }
    //If it is, get stock data and headline data
    const stockURL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${term}&interval=15min&apikey=${APIKEY.StockAPI}`;
    const chartdata = await getDataFromAPI(stockURL);

    const newsURL = `https://newsapi.org/v2/everything?q=${stockdata[term].FullName.split(" ")[0]}&q=${stockdata[term].FullName.split(" ").join("")}&q=${term}&pageSize=20&apiKey=${APIKEY.NewsAPI}`;
    const headlines = await getDataFromAPI(newsURL);
    //Create and add an object with the ticker name, headlines about the stock, and chart data to the state
    const resultobj = {
      name: term,
      headlines: headlines.articles.slice(0,3),
      chartdata: chartdata["Note"]
        ? ["N/A"]
        : Object.entries(chartdata["Time Series (15min)"]),
      currentprice: Number(chartdata["Time Series (15min)"][Object.keys(chartdata["Time Series (15min)"])[0]]["4. close"]).toFixed(2)
    };

    this.setState({chartandnews: [resultobj].concat(this.state.chartandnews)})

  };

  DeleteStockBox = (tickerName) => {
    this.setState({
      chartandnews: this.state.chartandnews.filter(stockobj => stockobj["name"] !== tickerName)
    })
  };

  render() {
    return (<div>
      <nav>
        <SearchBar onSubmit={this.MakeApiCalls}/>
        <p>Try searching for FB (Facebook) or KO (Coca-Cola)</p>
      </nav>
      <div className="StockBoxContainer">
        {this.state.chartandnews.map((dataObj, i) => <StockBox key={i} name={dataObj.name} headlines={dataObj.headlines} chartdata={dataObj.chartdata} currentprice = {dataObj.currentprice} deleteStockBox={this.DeleteStockBox}/>)}
      </div>
    </div>)
  }
}
ReactDOM.render(<App/>, document.querySelector('#root'));
