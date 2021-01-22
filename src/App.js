import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes';
import NavBar from './components/layout/NavBar';
import SearchBar from './components/layout/SearchBar';
import backgroundImage from './backgroundpokenoob.png';
import Home from './pages/Home';

import ReactDom from "react-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{background:`url(${backgroundImage})`}}>
          <NavBar/>
          <SearchBar/>
          <Routes/>
        </div>
      </Router>
      
    );
  }
}


export default App;
