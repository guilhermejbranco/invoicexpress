import React, { Component } from 'react';
import '../styles/Pagination.scss';

class Pagination extends Component {

  state = {currentPage : 1};

  changePage(page){
    console.log(page)
    this.setState({
      currentPage: page
    }, () => {
				  this.props.parentCallback(this.state);
				})
  }

	render() {

    var items = []

    for (var i = 1; i <= Math.ceil(this.props.parentData.filteredDocuments.length/7); i++) {
      if(this.state.currentPage === i){
        items.push(<li class="page-item active"><button class="page-link" >{i}</button></li>)
      }
      else{
        items.push(<li class="page-item"><button class="page-link "   onClick={this.changePage.bind(this, i)}>{i}</button></li>)
      }

    }

		return (
            <nav aria-label="Page navigation example"  className="float-right ">
              <ul class="pagination">

                <li className={"page-item" + (this.state.currentPage === 1 ? ' disabled' : '')}><button class="page-link"  onClick={this.changePage.bind(this, this.state.currentPage - 1)}>Previous</button></li>
                {items}
                <li className={"page-item" + (this.state.currentPage === Math.ceil(this.props.parentData.filteredDocuments.length/7) ? ' disabled' : '')}><button class="page-link"  onClick={this.changePage.bind(this, this.state.currentPage + 1)}>Next</button></li>
              </ul>
            </nav>
        );
    }
}

export default Pagination;
