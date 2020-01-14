import React, { Component } from 'react';
import '../styles/Filter.scss';
import data from "../assets/resources/documents";

class Filter extends Component {

	state = { filterBy: "client_name", searchInput: "", filteredDocuments: [] };


	updateDocument(){
		var filteredDocuments = []

		for(var i = 0; i < data.documents.length; i++){
			if(String(data.documents[i][this.state.filterBy]).toLowerCase().includes(String(this.state.searchInput).toLowerCase())){
				filteredDocuments.push(data.documents[i])
			}
		}

		this.setState({filteredDocuments: filteredDocuments}, () => {
			this.props.parentCallback(this.state);
		})
	}

		changeFilter = (event) => {
				this.setState({filterBy: event.target.value}, () => {
				  this.updateDocument();
				})
		};

			changeSearchInput = (event) => {
					this.setState({searchInput: event.target.value}, () => {
					  this.updateDocument();
					})
			};

	componentDidMount(){
		this.updateDocument();
	}

	render() {

    var keys = []
    const result = data.documents[0]
    for (var key in result){
      keys.push(key)
    }
    return (
          <div className="row w-100 pt-2 pb-2 container ">

						<div className="col-md-6">
							<h6 className="text-uppercase text-left mt-2"><span className="font-weight-light">Documents</span><span className="font-weight-bolder">Xpress</span></h6>
						</div>

							<div className="col-md-6">
								<div className="row">
									<div className="col col-md-6">

										<input id="searchInput" className="form-control" type="text" placeholder={"Searching by " + this.state.filterBy} onChange={this.changeSearchInput}></input>
									</div>
									<div className="col col-md-6">
										<select id="filterBy" className="form-control form-control-sm h-100" onChange={this.changeFilter} value={this.state.filterBy}>

											{
													keys.map((key, i) => {
														return (

																<option key={key + "_" + i} value={key}>{key}</option>

														);
													})
												}
										</select>
									</div>
								</div>


							</div>
          </div>
    );
    }
}

export default Filter;
