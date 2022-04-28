import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokelist, setPokelist] = useState(null);


    const getPokelist = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then (response => setPokelist(response.data.results))
    };

    return (
        <div>
            <button onClick={getPokelist}>Select Pokemoons</button>
            {pokelist && 
            pokelist.map ((pokemon, index)=>{
                return (
                    <div key={index}> {pokemon.name}</div>
                )
            })}
        </div>
    );
}

export default Pokemon; 