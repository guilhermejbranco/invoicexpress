import React, { Component } from 'react';
import '../styles/List.scss';
import data from "../assets/resources/documents";

class Filter extends Component {

	state = { filterBy: "client_name", searchInput: "" };

	sendData = (filterBy) => {

	};

		changeFilter = (event) => {
				this.setState({filterBy: event.target.value}, () => {
				  this.props.parentCallback(this.state);
				})
		};

			changeSearchInput = (event) => {
					this.setState({searchInput: event.target.value}, () => {
					  this.props.parentCallback(this.state);
					})
			};


	render() {
    var keys = []
    const result = data.documents[0]
    for (var key in result){
      keys.push(key)
    }
    return (
          <div className="row w-100 pt-2 pb-2">

						<div className="col-md-4">
							<input className="form-control" type="text" placeholder="Search input here…" onChange={this.changeSearchInput}></input>
						</div>

							<div className="col-md-4">
								<select className="form-control form-control-sm w-100" onChange={this.changeFilter} value={this.state.filterBy}>

									{
											keys.map((key, i) => {
												return (

														<option value={key}>{key}</option>

												);
											})
										}
								</select>
							</div>

								<div className="col-md-4">
								</div>
          </div>
    );
    }
}

export default Filter;
