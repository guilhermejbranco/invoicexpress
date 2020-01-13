import React, { Component } from 'react';
import '../styles/App.scss';
import List from './List'
import Filter from './Filter'
import Pagination from './Pagination'

class App extends Component{
  state = { filterBy: "client_name", searchInput: "", currentPage : 1}

  callbackFunction = (childData) => {
    this.setState({filterBy: childData.filterBy, searchInput: childData.searchInput, currentPage: childData.currentPage})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Filter parentCallback={this.callbackFunction}></Filter>
          <Pagination parentCallback={this.callbackFunction}></Pagination>
          <List parentData={this.state}></List>

        </header>
      </div>
    );
  }
}

export default App;
