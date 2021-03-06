import React, {Component} from 'react';
import '../componentstyles/BaseComponentStyles.css';
class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  };

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className="Search">
      <form onSubmit={this.onSearchSubmit}>
        <input type="search" placeholder="Search for a stock (MSFT, AMZN, GOOGL, FB...)" className="SearchBar" value={this.state.term} onChange={event => this.onInputChange(event)}/>
        <button>SEARCH</button>
  </form>
    </div>);
  }
};

export default SearchBar;
