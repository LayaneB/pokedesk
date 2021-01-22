import React, { Component } from 'react';
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" id="titulo1">
                    <div classeName="col-md-12">
                        <h3>Capture seus Pokémons!</h3>
                    </div>                
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" >POKENOOB</a>
                    <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
              
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="todospokemons">Todos Pokémons</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="meuspokemons">Minha Pokébola</a>
                            </li>                    
                        </ul>                        
                    </div>              
                </nav>
            </div>
        );
    }
}

            