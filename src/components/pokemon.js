import React, { useState, Component } from "react";
import axios from "axios";

export default class pokemon extends Component {
  state = {
    name: '',
    id: '',
    types: [],
    height: '',
    weight: '',
    abilities: ''
  }
}
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
   
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const url = `https://pokeapi.co/api/v2/pokemon/`;
      const res = await axios.get(url);
      toArray.push(res.data);
      const name = res.data.name;
      const id = res.data.id;
      const types = res.data.types.map(type=>type.type.name);
      const height = res.data.height;
      const weight = res.data.weight;
      const abilities = pokemonRes.data.abilities.map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', '); 


  };
 
