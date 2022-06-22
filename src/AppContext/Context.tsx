import { createContext } from "react";


interface Pokemon {
    count: number;
    next: string;
    previous: string;
    results: [{
        name: string;
        url: string;
    }];
}

const AppContext = createContext<Pokemon>({} as Pokemon);

export default AppContext;
