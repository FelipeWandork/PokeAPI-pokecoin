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

    const [offset, setOffset] = useState<number>(0);
    const [limit, setLimit] = useState<number>(0);

// corrigir o código para sincronizar automaticamente a quantidade de Pokemons da API
    useEffect(() => {
        api.get("/pokemon/?offset=0&limit=1126")
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