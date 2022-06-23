import { useContext } from "react";
import AppContext from "../../AppContext/Context";
import { Square } from "../Square";
import { Container } from "./styles";

export function SelectPokemon() {
    const { results } = useContext(AppContext);

    return (
        <>
            <Container>
                {results.map(pokemon => (
                    <Square key={pokemon.name} pokemon={pokemon} />
                ))}
            </Container>
        </>
    )
}