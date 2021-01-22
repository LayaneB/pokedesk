import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import SearchBar from './components/layout/SearchBar';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from './backgroundpokenoob.png';

import ReactDom from "react-dom";

class App extends Component {
  render() {
    return (
       
        <div className="App" style={{background:`url(${backgroundImage})`}}>
          <NavBar/>
          <SearchBar/>
          <div className="container">
            <Dashboard></Dashboard>
          </div>
        </div>



    );
  }
}


export default App;
