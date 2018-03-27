import React, { Component } from 'react';
// import logo from './logo.svg';
import SearchBar from './SearchBar';
import './resources/css/App.css';
import '../node_modules/reset-css/reset.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="appTitle">Made By Hand</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
