import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import giphy from './giphy.gif';

export default class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>Capturando Pokémons...</h5>
      </React.Fragment>
    );
  }
}