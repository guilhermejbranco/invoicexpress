import React from 'react';
import '../styles/App.scss';
import List from './List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <List></List>
      </header>
    </div>
  );
}

export default App;
