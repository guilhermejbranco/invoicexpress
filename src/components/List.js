import React, { Component } from 'react';
import '../styles/List.scss';
import '../styles/_variables.scss';

class List extends Component {

	render() {
		var dict = {
			"Final":"badge-success",
			"Draft":"badge-secondary",
			"Cancelled":"badge-danger",
			"Paid":"badge-warning"

    }
		var keys = []

    for (var key in this.props.parentData.filteredDocuments[0]) {
      keys.push(<div className="col col-md-2 font-weight-bold text-left">{key}</div>)
    }


		return (
				<span className="w-75">
						<div className="row small">{keys}</div>
						{this.props.parentData.filteredDocuments.length === 0 &&
							<span className="small">
								No results found for
								<span className="primarycolor font-weight-bold"> "{this.props.parentData.searchInput}"</span>.
							</span>
						}
            <ul className="list-group pt-2 pb-2">
                {
          					this.props.parentData.filteredDocuments.map((document, i) => {
          						return (
												<span>
												{
													i >= (this.props.parentData.currentPage - 1) * 7 &&
													i < (this.props.parentData.currentPage) * 7 &&
          							<li className="list-group-item text-left" key={i}>
          								<div className="row small">
														<div className="col col-md-2">
															<span className={"badge " +  dict[document.status] }>
																{document.status}
															</span>
														</div>
														<div className="col col-md-2">{document.type}</div>
														<div className="col col-md-2">{document.number}</div>
														<div className="col col-md-2">{document.client_name}</div>
														<div className="col col-md-2">{document.date}</div>
														<div className="col col-md-2 text-right">{document.total_w_vat}</div>
          								</div>
          							</li>
												}
												</span>
          						);
          					})
          				}
            </ul>
					</span>
        );
    }
}

export default List;
