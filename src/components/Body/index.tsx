import { count } from "console";
import AppProvider from "../../AppContext/Provider";
import { SideLeft } from "../SideLeft";
import { SideRight } from "../SideRight";
import { Container } from "./styles";

export function Body() {
    return (
        <AppProvider>
            <Container>
                <SideLeft />
                <SideRight />
            </Container >
        </AppProvider>
    );
}