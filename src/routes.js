import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import MeusPockets from './pages/MeusPockets';
import Home from './pages/Home';
import pokemon from './pages/pokemon';


export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/meuspockets' component={MeusPockets} />
                    <Route path='/pokemon/' component={pokemon} />
                </Switch>
            </main>
        )
    }
};

export default Routes;

