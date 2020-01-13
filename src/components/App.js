import React,{Component} from 'react';
import '../styles/App.scss';
import List from './List';
import Pagination from './Pagination';

class App extends Component {

  state = {currentPage : 1};

  callbackFunction = (childData) => {
    this.setState({currentPage: childData.currentPage})
  };

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Pagination parentCallback={this.callbackFunction}></Pagination>
        <List parentData={this.state}></List>
      </header>
    </div>
  );
  }
}

export default App;
