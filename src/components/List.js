import React, { Component } from 'react';
import '../styles/List.scss';
import data from "../assets/resources/documents";

class List extends Component {
	render() {
		return (
            <ul className="list-group">
                {
          					data.documents.map((document, i) => {
          						return (
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
          						);
          					})
          				}
            </ul>
        );
    }
}

export default List;
