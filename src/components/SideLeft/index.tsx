import { Container } from "./styles";

export function SideLeft() {
    return (
        <Container>
            <div className="leftSide">
                <h1>Simulador PokeCoin</h1>
                <span>
                    <p>Esta é uma aplicação que determina o valor do Pokemon em satoshi. <br />
                        Para que o valor do Pokemon esteja vinculado à criptomoeda e seu valor seja atualizado,
                        utilizamos a API do site <a className="text-blue-600 visited:text-purple-600" href="https://pokeapi.co/">PokeAPI</a> e referenciamos a
                        quantidade de satoshi ao atributo 'base_experience'.
                    </p>
                    <p>
                        No caso, esta aplicação é apenas uma forma de estudo de programação utilizando ReactJS, NextJS e outras tecnologias, não possuindo nenhum valor real.
                    </p>
                </span>
            </div>
        </Container>
    );
}