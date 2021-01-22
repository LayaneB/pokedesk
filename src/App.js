import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import SearchBar from './components/layout/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <SearchBar/>
      </div>
    );
  }
}


export default App;
