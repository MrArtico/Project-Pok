import styled from 'styled-components';
import React from 'react';

const Header = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    background-color: grey;
    width: 100vw;
`;

const ButtonLayout = styled.button `
    border-style: none;
    background: none;
    color: white;
    padding: 39px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    &:hover {
        border-style: none;
        background-color: rgb(100, 100, 100);
        padding: 39px;
        cursor: pointer;
    }
    &:active {
        background-color: white;
        color: black;
    }
`;

export function PokeHeader() {
    return (
        <Header>
            <ButtonLayout>Créditos</ButtonLayout>
            <ButtonLayout>Desenvolvedor</ButtonLayout>
        </Header>
    );
}