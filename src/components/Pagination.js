import React, { Component } from 'react';
import '../styles/Pagination.scss';

    // for other devs who might not know keyCodes
  var NEXT_KEY = 39;
  var PREVIOUS_KEY = 37;


class Pagination extends Component {

  state = {currentPage : 1};



  _handleKeyDown = (event) => {
      switch( event.keyCode ) {
          case NEXT_KEY:
              if(document.getElementById("searchInput") != document.activeElement){
                  this.changePage(this.state.currentPage + 1);
              }
              break;
          case PREVIOUS_KEY:
              if(document.getElementById("searchInput") != document.activeElement){
                  this.changePage(this.state.currentPage - 1);
              }
              break;
          default:
              break;
      }
  };



    // componentWillMount deprecated in React 16.3
  componentDidMount(){
      document.addEventListener("keydown", this._handleKeyDown);
  };


  componentWillUnmount() {

      document.removeEventListener("keydown", this._handleKeyDown);
  };

  changePage(page){
    if(page > 0 && page <= Math.ceil(this.props.parentData.filteredDocuments.length/7)){
      this.setState({
        currentPage: page
      }, () => {
  				  this.props.parentCallback(this.state);
  				})
      return this.state.currentPage;
    }
  }

	render() {

    var items = []

    for (var i = 1; i <= Math.ceil(this.props.parentData.filteredDocuments.length/7); i++) {
      if(this.state.currentPage === i){
        items.push(<li className="page-item active" key={i}><button className="page-link" >{i}</button></li>)
      }
      else{
        items.push(<li className="page-item" key={i}><button className="page-link "   onClick={this.changePage.bind(this, i)}>{i}</button></li>)
      }

    }

		return (
            <nav aria-label="Page navigation example"  className="float-right ">
              <ul className="pagination">

                <li className={"page-item" + (this.state.currentPage === 1 ? ' disabled' : '')}><button id="previous-page" className="page-link"  onClick={this.changePage.bind(this, this.state.currentPage - 1)}>Previous</button></li>
                {items}
                <li className={"page-item" + (this.state.currentPage === Math.ceil(this.props.parentData.filteredDocuments.length/7) ? ' disabled' : '')}><button id="next-page" className="page-link"  onClick={this.changePage.bind(this, this.state.currentPage + 1)}>Next</button></li>
              </ul>
            </nav>
        );
    }
}

export default Pagination;
