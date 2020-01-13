import React, { Component } from 'react';
import '../styles/App.scss';
import List from './List'
import Filter from './Filter'
import Pagination from './Pagination'

class App extends Component{
  state = { filterBy: "client_name", searchInput: "", currentPage : 1}

  paginationCallbackFunction = (childData) => {
    this.setState({currentPage: childData.currentPage})
  };

  filterCallbackFunction = (childData) => {
    this.setState({filterBy: childData.filterBy, searchInput: childData.searchInput})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Filter parentCallback={this.filterCallbackFunction}></Filter>
          <Pagination parentData={this.state} parentCallback={this.paginationCallbackFunction}></Pagination>
          <List parentData={this.state}></List>

        </header>
      </div>
    );
  }
}

export default App;
