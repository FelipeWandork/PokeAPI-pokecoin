import { Container } from "./styles";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { PokemonsNumber } from "../PokemonsNumber";
import { SelectPokemon } from "../SelectPokemon";
import AppContext from "../../AppContext/Context";
import { Square } from "../Square";

export function SideRight() {

    const [pokemonCount, setPokemonCount] = useState(0);

    useEffect(() => {
        api.get("/pokemon")
            .then(response => setPokemonCount(response.data.count))
    }, []);

    return (
        <Container>
            <h3>Atualmente são  <PokemonsNumber count={pokemonCount} /> Pokemons</h3>
            <SelectPokemon />
        </Container>

        
    );
}