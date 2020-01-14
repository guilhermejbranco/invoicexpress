import React, { Component } from "react";
import "../styles/Filter.scss";
import data from "../assets/resources/documents";

class Filter extends Component {

	/*
	Fetch the data received from the parents in props.
	*/
  state = {
    filterBy: this.props.parentData.filterBy,
    searchInput: this.props.parentData.searchInput,
    filteredDocuments: []
  };

	/*
	Function to update the documents with the new searchInput and filter applied.
	After updating the documents propagates the new filteredDocuments to the parent,
	which will later on send it to the other components.
	*/
  updateDocument() {
    var filteredDocuments = [];

    for (var i = 0; i < data.documents.length; i++) {
      if (
        String(data.documents[i][this.state.filterBy])
          .toLowerCase()
          .includes(String(this.state.searchInput).toLowerCase())
      ) {
        filteredDocuments.push(data.documents[i]);
      }
    }
		filteredDocuments.sort((a,b) => a.client_name.localeCompare(b.client_name));

    this.setState({ filteredDocuments: filteredDocuments }, () => {
      this.props.parentCallback(this.state);
    });
  }

	/*
	Function that gets called when the filter is changed by the user.
	The new filter is setted in the component state, and the filteredDocuments is updated.
	*/
  changeFilter = event => {
    this.setState({ filterBy: event.target.value }, () => {
      this.updateDocument();
    });
  };

	/*
	Function that gets called when the searchInput is changed by the user.
	The new searchInput is setted in the component state, and the filteredDocuments is updated.
	*/
  changeSearchInput = event => {
    this.setState({ searchInput: event.target.value }, () => {
      this.updateDocument();
    });
  };

	/*
	After mounting, the component should update the filteredDocuments array, because
	a searchInput and a filterBy could be setted in the cookies.
	*/
  componentDidMount() {
    this.updateDocument();
  }

  render() {

		/*
		Create an array of the keys available in the invoice documents.
		*/
    var keys = [];
    const result = data.documents[0];
    for (var key in result) {
      keys.push(key);
    }

    return (
      <div className="row w-100 pt-2 pb-2 container ">
        <div className="col-md-6">
          <h6 className="text-uppercase text-left mt-2">
            <span className="font-weight-light">Documents</span>
            <span className="font-weight-bolder">Xpress</span>
          </h6>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col col-md-6">
              <input
                id="searchInput"
                className="form-control"
                type="text"
                placeholder={"Searching by " + this.state.filterBy}
                onChange={this.changeSearchInput}
                value={this.state.searchInput}
              ></input>
            </div>
            <div className="col col-md-6">
              <select
                id="filterBy"
                className="form-control form-control-sm h-100"
                onChange={this.changeFilter}
                value={this.state.filterBy}
              >
                {keys.map((key, i) => {
                  return (
                    <option key={key + "_" + i} value={key}>
                      {key}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
