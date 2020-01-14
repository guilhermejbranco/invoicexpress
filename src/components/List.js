import React, { Component } from "react";
import "../styles/List.scss";
import "../styles/_variables.scss";

class List extends Component {

  render() {

		/*
		Dictionary to translate the invoice status to bootstrap badge classes.
		*/
    var dict = {
      Final: "badge-success",
      Draft: "badge-secondary",
      Cancelled: "badge-danger",
      Paid: "badge-warning"
    };

		/*
		Create an array with columns elements with the invoice keys.
		This will be the title in each column.
		*/
    var keys = [];
    for (var key in this.props.parentData.filteredDocuments[0]) {
      keys.push(
        <div className="col col-md-2 font-weight-bold text-left" key={key}>
          {key}
        </div>
      );
    }

    return (
      <span className="w-75">
        <div className="row small">{keys}</div>

        {
					/*
					If there are no invoice in the filteredDocuments, display an error message.
					*/
					this.props.parentData.filteredDocuments.length === 0 && (
          <span className="small">
            No results found for
            <span className="primarycolor font-weight-bold">
              {" "}
              "{this.props.parentData.searchInput}"
            </span>
            .
          </span>
        )}
        <ul className="list-group pt-2 pb-2">
          {this.props.parentData.filteredDocuments.map((document, i) => {
            return (
							/*
							Display the li element, if the index is in between the valid page number.
							*/
              <span key={document.number + i}>
                {i >= (this.props.parentData.currentPage - 1) * 7 &&
                  i < this.props.parentData.currentPage * 7 && (
                    <li className="list-group-item text-left">
                      <div className="row small">
                        <div className="col col-md-2">
                          <span className={"badge " + dict[document.status]}>
                            {document.status}
                          </span>
                        </div>
                        <div className="col col-md-2">{document.type}</div>
                        <div className="col col-md-2">{document.number}</div>
                        <div className="col col-md-2">
                          {document.client_name}
                        </div>
                        <div className="col col-md-2">{document.date}</div>
                        <div className="col col-md-2 text-right">
                          {document.total_w_vat}
                        </div>
                      </div>
                    </li>
                  )}
              </span>
            );
          })}
        </ul>
      </span>
    );
  }
}

export default List;
