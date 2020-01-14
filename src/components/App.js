import React, { Component } from 'react';
import '../styles/App.scss';
import List from './List'
import Filter from './Filter'
import Pagination from './Pagination'


class App extends Component{
  state = { filterBy: "client_name", searchInput: "", currentPage : 1, filteredDocuments : []}

  paginationCallbackFunction = (childData) => {
    this.setState({currentPage: childData.currentPage})
  };

  filterCallbackFunction = (childData) => {
    this.setState({filteredDocuments: childData.filteredDocuments, searchInput: childData.searchInput})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header pt-3 pb-3">
          <Filter parentCallback={this.filterCallbackFunction}></Filter>
        </header>
        <div className="container mt-5">
          <List parentData={this.state}></List>
          <Pagination parentData={this.state} parentCallback={this.paginationCallbackFunction}></Pagination>
        </div>
      </div>
    );
  }
}

export default App;
