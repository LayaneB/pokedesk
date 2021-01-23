import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import giphy from './giphy.gif';

export default class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <div> <img
            src={giphy}
            style={{width: '15em',height:'15em'}}
            className="card-img-top rounded mx-auto d-block mt-2"
            />
        </div>
      </React.Fragment>
    );
  }
}