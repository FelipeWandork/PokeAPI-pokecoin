import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { PokemonsNumber } from "../PokemonsNumber";

interface PokemonProps {
    id: number;
    results: [];
    baseExperience: number;
    name: string;
    count: number;
}

export function SideRight() {
    const [pokemon, setPokemon] = useState<PokemonProps[]>([]);


    const [endPoint, setEndPoint] = useState('');

    // const [offset, setOffset] = useState(0);
    // const [limit, setLimit] = useState(10);
    // setLimit(10);
    // setOffset(0);
    // setEndPoint("/pokemon/?offset=0&limit=10");

    useEffect(() => {
        api.get("/pokemon/?offset=0&limit=10")
            .then(response => response.data)
            .then(data => setPokemon(data.results))
    }, []);

    const [pokemonCount, setPokemonCount] = useState(0);

    useEffect(() => {
        api.get("/pokemon")
            .then(response => setPokemonCount(response.data.count))
    }, []);

    return (
        <Container>
            <h3>Atualmente são  <PokemonsNumber count={pokemonCount} /> Pokemons</h3>
            <ul>
                {pokemon.map(pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </Container>
    );
}