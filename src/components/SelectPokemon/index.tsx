import { useContext, useState } from "react";
import AppContext from "../../AppContext/Context";

export function SelectPokemon() {
    const { results } = useContext(AppContext);

    return (
        <>
            <select name='pokemons'>
                {results?.map( pokemon =>  (
                    <option key={pokemon.name} value= {pokemon.name} >{pokemon.name}</option>
                ))}
            </select>
        </>
    )
}