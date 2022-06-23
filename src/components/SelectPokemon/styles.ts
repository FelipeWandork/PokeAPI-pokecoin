import styled from "styled-components";

export const Container = styled.div`

    margin-top: 20px;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    overflow: auto;
`;