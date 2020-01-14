import React, { Component } from 'react';
import '../styles/App.scss';
import List from './List'
import Filter from './Filter'
import Pagination from './Pagination'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class App extends Component{

  state = { filterBy: "client_name", searchInput: "", currentPage : 1, filteredDocuments : []}



  paginationCallbackFunction = (childData) => {
    this.setState({currentPage: childData.currentPage})
    cookies.set('currentPage', childData.currentPage, { path: '/' });

  };

  filterCallbackFunction = (childData) => {
    this.setState({filteredDocuments: childData.filteredDocuments, searchInput: childData.searchInput})
    cookies.set('searchInput', childData.searchInput, { path: '/' });
    cookies.set('filterBy', childData.filterBy, { path: '/' });
  };

  componentWillMount(){
      if(cookies.get('filterBy') != null){
        this.setState({filterBy: cookies.get('filterBy')})
      }

      if(cookies.get('searchInput') != null){
        this.setState({searchInput: cookies.get('searchInput')})
      }

      if(cookies.get('currentPage') != null){
        this.setState({currentPage: cookies.get('currentPage')})
      }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header pt-3 pb-3">
          <Filter parentData={this.state} parentCallback={this.filterCallbackFunction}></Filter>
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
