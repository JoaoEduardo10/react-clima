import styled from 'styled-components';

export const Conteiner  = styled.div<{ cor: boolean }>`
    background-color: ${props => props.cor ? "#121212" : "#F3F4F6"};
    height: 72.7rem;
    width: 67%;
    display: flex;
    flex-direction: column;

    section{
        background-color: ${props => props.cor ? "#121212" : "#F3F4F6"};
        color: ${props => props.cor ? "#fff" : "#000"};
    }

    @media (max-width: 832px) {
        width: 100%;
    }
`;