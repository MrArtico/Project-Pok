import styled from 'styled-components';
import React from 'react';

const Footer = styled.footer`
    width: 100vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
`;

export function PokeFooter() { 
    return(
        <Footer>
            <p>Desenvolvido por Thiago Gonçalves.</p>
            <p>Algumas imagens disponíveis aqui não são de minha autoria.</p>
        </Footer>
    );
}