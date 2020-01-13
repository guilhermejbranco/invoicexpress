import React, { Component } from 'react';
import '../styles/List.scss';
import data from "../assets/resources/documents";

class List extends Component {
	render() {
		return (
            <ul className="list-group pt-2 pb-2">
                {
          					data.documents.map((document, i) => {
          						return (
												<span>
												{ String(document[this.props.parentData.filterBy]).toLowerCase().includes(String(this.props.parentData.searchInput).toLowerCase()) &&
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
