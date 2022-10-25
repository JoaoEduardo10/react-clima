import styled from 'styled-components';

export const Conteiner  = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.6rem 3rem;

    svg{
        cursor: pointer;
    }
    
`;

export const Text = styled.h1<{ cor: boolean }>`
    font-size: 2.4rem;
    font-weight: bold;

    color: ${props => props.cor ? "#fff" : "black"};
`;

export const Itens = styled.div<{ cor: boolean, statu: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: .7rem;
    width: 30%;
    font-size: 2rem;

    .C{
        background-color: ${props => !props.color && !props.statu ? "#000" : "#fff"};
        color: ${props => !props.color && !props.statu ? "#fff" : "#000"};
    }

    .F{
        background-color: ${props => !props.color && props.statu ? "#000" : "#fff"};
        color: ${props => !props.color && props.statu ? "#fff" : "#000"}
    }

    .claro{
        color: #fff;
    }

    .escuro{
        color: #000;
    }
`;

export const ConteinerItens = styled.div`
    font-size: 1.7rem;
    background-color: #fff;
    padding: .9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem 1rem 1rem 1rem;
    cursor: pointer;

    
`;

