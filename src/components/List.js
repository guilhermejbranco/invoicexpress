import React, { Component } from 'react';
import '../styles/List.scss';

class List extends Component {


	render() {
		console.log(this.props.parentData.filteredDocuments)

		return (
            <ul className="list-group pt-2 pb-2">
                {
          					this.props.parentData.filteredDocuments.map((document, i) => {
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
