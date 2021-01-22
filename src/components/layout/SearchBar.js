import React, { Component } from 'react';
import styled from "styled-components";

export default class SearchBar extends Component {
    render() {
        return (
            <div className="container">                
                <form className="form-inline my-2 my-lg-3">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>                  
                </form> 
            </div>            
        )
    }
}
