import { useContext } from "react";
import AppContext from "../../AppContext/Context";
import { Container } from "./styles";

interface Pokemon {
    name: string;
    url: string;
}
export function Square({ pokemon }: any) {
    const { results } = useContext(AppContext);

    return (
        <Container>
            <a href={pokemon.url} target="_blank" rel="noreferrer">{pokemon.name}</a><br />
            <div className="coins">
                <div className="satoshi">SATS: 0.0123</div> 
                <div className="dolar">DÓLAR: 0.02</div>
            </div>
        </Container>
    )
}