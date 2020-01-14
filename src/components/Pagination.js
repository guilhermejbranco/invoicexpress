import React, { Component } from "react";
import "../styles/Pagination.scss";

// for other devs who might not know keyCodes
var NEXT_KEY = 39;
var PREVIOUS_KEY = 37;

class Pagination extends Component {

  state = { currentPage: parseInt(this.props.parentData.currentPage) };

  /*
  Keydown function to change the page on -> and <- press. Increments and decrements
  currentPage accordingly. Has to check if the input box is focused, in order to
  block keydown events when the user is typing.
  */
  _handleKeyDown = event => {
    switch (event.keyCode) {
      case NEXT_KEY:
        if (document.getElementById("searchInput") !== document.activeElement) {
          this.changePage(this.state.currentPage + 1);
        }
        break;
      case PREVIOUS_KEY:
        if (document.getElementById("searchInput") !== document.activeElement) {
          this.changePage(this.state.currentPage - 1);
        }
        break;
      default:
        break;
    }
  };

  // Binds the keydown press to the handle function
  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
  }

  // Removes the bind for the keydown press
  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  /*
  Changes the currentPage to the var page received. Has to check if the page received
  is in between valid bounds. After changing the state, calls the parent callback function.
  */
  changePage(page) {
    if (
      page > 0 &&
      page <= Math.ceil(this.props.parentData.filteredDocuments.length / 7)
    ) {
      this.setState(
        {
          currentPage: page
        },
        () => {
          this.props.parentCallback(this.state);
        }
      );
      return this.state.currentPage;
    }
  }

  render() {

    /*
    After typing a searchInput, if a user is in the page 4 for example, and if the
    pages get reduced to a number lower than 4,
    the user has to be redirected to the biggest page.
    */
    if (
      this.state.currentPage >
      Math.ceil(this.props.parentData.filteredDocuments.length / 7)
    ) {
      this.changePage(
        Math.ceil(this.props.parentData.filteredDocuments.length / 7)
      );
    }

    /*
    Generates the li items for the numbers in the pagination element. If the currentPage
    is equal to i, the class active is added in order to give it a distinct background.
    */
    var items = [];

    for (
      var i = 1;
      i <= Math.ceil(this.props.parentData.filteredDocuments.length / 7);
      i++
    ) {
        items.push(
          <li className={"page-item " + (this.state.currentPage === i ? ' active' : '')} key={i}>
            <button
              className="page-link "
              onClick={this.changePage.bind(this, i)}
            >
              {i}
            </button>
          </li>
        );

      }

    return (
      <nav aria-label="Page navigation example" className="float-right ">
        <ul className="pagination">
          <li
            className={
              "page-item" + (this.state.currentPage === 1 ? " disabled" : "")
            }
          >
            <button
              id="previous-page"
              className="page-link"
              onClick={this.changePage.bind(this, this.state.currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {items}
          <li
            className={
              "page-item" +
              (this.state.currentPage ===
              Math.ceil(this.props.parentData.filteredDocuments.length / 7)
                ? " disabled"
                : "")
            }
          >
            <button
              id="next-page"
              className="page-link"
              onClick={this.changePage.bind(this, this.state.currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
