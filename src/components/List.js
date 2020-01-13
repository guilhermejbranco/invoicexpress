import React, { Component } from 'react';
import '../styles/List.scss';
import data from "../assets/resources/documents";

class List extends Component {


	render() {
		var filteredDocuments = []

		for(var i = 0; i < data.documents.length; i++){
			if(String(data.documents[i][this.props.parentData.filterBy]).toLowerCase().includes(String(this.props.parentData.searchInput).toLowerCase())){
				filteredDocuments.push(data.documents[i])
			}
		}

		return (
            <ul className="list-group pt-2 pb-2">
                {
          					filteredDocuments.map((document, i) => {
          						return (
												<span>
												{ 
													i >= (this.props.parentData.currentPage - 1) * 7 &&
													i < (this.props.parentData.currentPage) * 7 &&
          							<li className="list-group-item" key={i}>
          								<div>
                            {document.status} |
                            {document.type} |
                            {document.client_name} |
                            {document.number} |
                            {document.date} |
                            {document.total_w_vat}
          								</div>
          							</li>
												}
												</span>
          						);
          					})
          				}
            </ul>
        );
    }
}

export default List;
