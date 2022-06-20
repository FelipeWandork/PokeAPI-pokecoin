import { count } from "console";
import { SideLeft } from "../SideLeft";
import { SideRight } from "../SideRight";
import { Container } from "./styles";

export function Body() {
    return (
        <Container>
            <SideLeft />
            <SideRight />
        </Container >
    );
}