import React, {Component, useState} from 'react';

import Dashboard from '../components/layout/Dashboard';
import axios from 'axios';

export class Home extends Component {
    render() {
                return (
                    <div className="container">
                        <Dashboard></Dashboard>
                    </div>
        )
   }
};

export default Home;



