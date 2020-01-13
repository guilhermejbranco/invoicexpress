import React, { Component } from 'react';
import '../styles/List.scss';
import data from "../assets/resources/documents";

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
    var filteredDocuments = []

    for(var i = 0; i < data.documents.length; i++){
      if(String(data.documents[i][this.props.parentData.filterBy]).toLowerCase().includes(String(this.props.parentData.searchInput).toLowerCase())){
        filteredDocuments.push(data.documents[i])
      }
    }

    for (var i = 1; i <= Math.ceil(filteredDocuments.length/7); i++) {
      if(this.state.currentPage == i){
        items.push(<li class="page-item active"><a class="page-link" href="#">{i}</a></li>)
      }
      else{
        items.push(<li class="page-item"><a class="page-link " href="#"  onClick={this.changePage.bind(this, i)}>{i}</a></li>)
      }

    }

		return (
            <nav aria-label="Page navigation example">
              <ul class="pagination">

                <li className={"page-item" + (this.state.currentPage == 1 ? ' disabled' : '')}><a class="page-link" href="#" onClick={this.changePage.bind(this, this.state.currentPage - 1)}>Previous</a></li>
                {items}
                <li className={"page-item" + (this.state.currentPage == Math.ceil(filteredDocuments.length/7) ? ' disabled' : '')}><a class="page-link" href="#" onClick={this.changePage.bind(this, this.state.currentPage + 1)}>Next</a></li>
              </ul>
            </nav>
        );
    }
}

export default Pagination;
