import { Container } from "./styles";

interface PokemonsNumberProps {
    count: number;
}

export function PokemonsNumber({ count }: PokemonsNumberProps) {
    return (
        <Container>{count}</Container>
    )
}