import React, { Component } from 'react';
import api from '../../services/api';
import PokemonCard from './PokemonCard';
import Loading from '../Loading';


import { Cards, Load } from './styles';

export default class PokemonList extends Component {
  state = {
    pokemons: null
  };

  async componentDidMount() {
    const res = await api.get('pokemon/?limit=360');
    this.setState({ pokemons: res.data['results'] });
  }

 

  render() {
    return (
      <div>
        {this.state.pokemons ? (
          <Cards>
            {this.state.pokemons.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          
          </Cards>
        ) : (
         <Load>
            <Loading></Loading>
         </Load>
        )}
      </div>
    );
  }
}
