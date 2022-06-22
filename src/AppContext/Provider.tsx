import { Result } from "postcss";
import { ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import AppContext from "./Context";

interface PokemonsProps {
    children: ReactNode;
}

const AppProvider = (({ children }: PokemonsProps) => {

    const [results, setResults] = useState<[{name: string, url: string}]>([{name: '', url: ''}]);
    const [count, setCount] = useState<number>(0);
    const [next, setNext] = useState<string>('');
    const [previous, setPrevious] = useState<string>('');

    useEffect(() => {
        api.get("/pokemon")
            .then((response) => {
                setResults(response.data.results);
                setCount(response.data.count);
                setNext(response.data.next);
                setPrevious(response.data.previous);
            })
    }, []);

    return (
        <AppContext.Provider value={{ count, next, previous, results }}>
            {children}
        </AppContext.Provider>
    );
});

export default AppProvider;