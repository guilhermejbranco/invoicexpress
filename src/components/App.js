import React, { Component } from "react";
import "../styles/App.scss";
import List from "./List";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class App extends Component {

  /*
  Transversal variables for every component.
  filterBy: The invoice field which will be filtered by. (Default value: "client_name")
  searchInput: The string that the user inserts to filter the invoices
  currentPage: Page that the user currently is on.
  filteredDocuments: Array of the invoices filtered by filterBy and searchInput.
  */
  state = {
    filterBy: "client_name",
    searchInput: "",
    currentPage: 1,
    filteredDocuments: []
  };

  /*
  Callback function for the Pagination component. Gets called when the currentPage is changed.
  Updates the cookie "currentPage" in order to maintain state.
  */
  paginationCallbackFunction = childData => {
    this.setState({ currentPage: childData.currentPage });
    cookies.set("currentPage", childData.currentPage, { path: "/" });
  };

  /*
  Callback function for the Filter component. Gets called when the
  filteredDocuments or searchInput have changed.
  Updates the cookie "searchInput" and "filterBy" in order to maintain state.
  */
  filterCallbackFunction = childData => {
    this.setState({
      filteredDocuments: childData.filteredDocuments,
      searchInput: childData.searchInput,
      filterBy: childData.filterBy
    });
    cookies.set("searchInput", childData.searchInput, { path: "/" });
    cookies.set("filterBy", childData.filterBy, { path: "/" });
  };

  /*
  Before mounting, checks if there are saved cookies in the browser. If so,
  sets the state to said cookies.
  */
  componentWillMount() {
    if (cookies.get("filterBy") != null) {
      this.setState({ filterBy: cookies.get("filterBy") });
    }

    if (cookies.get("searchInput") != null) {
      this.setState({ searchInput: cookies.get("searchInput") });
    }

    if (cookies.get("currentPage") != null) {
      this.setState({ currentPage: cookies.get("currentPage") });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header pt-3 pb-3">
          <Filter
            parentData={this.state}
            parentCallback={this.filterCallbackFunction}
          ></Filter>
        </header>
        <div className="container mt-5">
          <List
            parentData={this.state}
          ></List>
          <Pagination
            parentData={this.state}
            parentCallback={this.paginationCallbackFunction}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default App;
