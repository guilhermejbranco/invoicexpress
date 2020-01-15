import React, { Component } from "react";
import "../styles/List.scss";
import "../styles/_variables.scss";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredDocuments: props.parentData.filteredDocuments,
      orderBy: "client_name",
      orderType: "desc"
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({ filteredDocuments: props.parentData.filteredDocuments });
  }


	/*
	Reverses the current order of the list.
	*/
  reverseOrder() {
    this.setState({
      filteredDocuments: this.state.filteredDocuments.reverse()
    });

    if (this.state.orderType === "asc") {
      this.setState({ orderType: "desc" });
    } else {
      this.setState({ orderType: "asc" });
    }
  }

	/*
	Receive the key which the user wants to order the list. If the list is already
	ordered by that key, calls a function to reverse the order by that key.
	*/
  changeOrder = (e, key) => {
    if (e === this.state.orderBy) {
      this.reverseOrder();
    } else {
      this.setState({ orderBy: e });
      if (isNaN(this.state.filteredDocuments[0][e])) {
        if (this.state.orderType === "desc") {
          this.setState({filteredDocuments: this.state.filteredDocuments.sort((a, b) => a[e].localeCompare(b[e]))});
        } else {
          this.setState({filteredDocuments: this.state.filteredDocuments.sort((a, b) => b[e].localeCompare(a[e]))});
        }
      } else {
        if (this.state.orderType === "desc") {
          this.setState({filteredDocuments: this.state.filteredDocuments.sort((a, b) => b[e] - a[e])});
        } else {
          this.setState({filteredDocuments: this.state.filteredDocuments.sort((a, b) => a[e] - b[e])});
        }
      }
    }
  };

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
		This will be the title in each column. Checks to see which of the keys is being
		used to order. Also, adds an up or down icon if the order is ascending or descending.
		*/
    var keys = [];
    for (var key in this.state.filteredDocuments[0]) {
      keys.push(
        <div
          className={
            "col col-md-2 font-weight-bold text-left border-0 text-uppercase pointer " +
            (key === this.state.orderBy ? "primarycolor" : "")
          }
          onClick={this.changeOrder.bind(this, key)}
          value={key}
          key={key}
          id={key}
        >
          {key}
          {key === this.state.orderBy && this.state.orderType === "asc" && (
            <FaArrowUp />
          )}

          {key === this.state.orderBy && this.state.orderType === "desc" && (
            <FaArrowDown />
          )}
        </div>
      );
    }

    return (
      <span className="w-100">
        <div className="list-group-item small border-0">
          <div className="row">{keys}</div>
        </div>

        {/*
					If there are no invoice in the filteredDocuments, display an error message.
					*/
        this.state.filteredDocuments.length === 0 && (
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
          {this.state.filteredDocuments.map((document, i) => {
            return (
              /*
							Display the li element, if the index is in between the valid page number.
							*/
              <span key={document.number + i}>
                {i >= (this.props.parentData.currentPage - 1) * 7 &&
                  i < this.props.parentData.currentPage * 7 && (
                    <li className="list-group-item text-left">
                      <div className="row small">
                        <div className="col col-md-2 border-0">
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
