import styled from "styled-components";

export const Container = styled.div`

    width: 100px;
    height: 100px;
    border-radius: 1rem;
    padding: 0 0.5rem;

    background: #eee;

    font-size: 0.75rem;
    font-weight: bold;

    transition: 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    a {
        text-decoration: none;
        color: blue;
    }

    a:visited {
        color: blue;
    }


    .coins {
        display: block;
        align-items: center;
        justify-items: baseline;
    }

    .satoshi {
        margin: 0;
        padding: 0;
        height: 1rem;
        font-size: 0.75rem;
        color: #ef5350;
    }

    .dolar {
        margin: 0;
        padding: 0;
        height: 1rem;
        font-size: 0.75rem;
        color: #ef5350;
    }

`;