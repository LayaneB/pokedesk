import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import MeusPockets from './pages/MeusPockets';
import Home from './pages/Home';
import Menu from './Menu';


export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/meuspokemons' component={MeusPockets} />
                    <Route path='/todospokemons' component={Home} />
                </Switch>
            </main>
        )
    }
};

export default Routes;

