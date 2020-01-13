import React, { Component } from 'react';
import '../styles/App.scss';
import List from './List'
import Filter from './Filter'

class App extends Component{
  state = { filterBy: "client_name", searchInput: "" }

  callbackFunction = (childData) => {
    this.setState({filterBy: childData.filterBy, searchInput: childData.searchInput})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Filter parentCallback={this.callbackFunction}></Filter>
          <List parentData={this.state}></List>

        </header>
      </div>
    );
  }
}

export default App;
