import styled from 'styled-components';

export const Conteiner  = styled.div<{ cor: boolean }>`
    flex: 1;
    background-color: ${props => props.cor ? "#161616" : "#FCFCFC"};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    color: ${props => props.cor ? "#fff" : "#000"};
`;

export const ConteinerInpult = styled.div<{ cor: boolean }>`
    width: 95%;
    background-color: ${props => props.cor ? "#121212" : "#F3F4F6"};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 2rem;

    svg{
        font-size: 2rem;
        cursor: pointer;
    }
    
    .svgMep{
        color: #808080;
    }
`;

export const Input = styled.input<{ cor: boolean }>`
    padding: 1rem;
    background-color: ${props => props.cor ? "#121212" : "#F3F4F6"};
    color: ${props => props.cor ? "#fff" : "#000"};
    border: none;
    flex: 1;
    border-radius: 2rem;
    outline: none;
    font-size: 1.6rem;
`;

export const Info = styled.section`
    margin-top: 2.4rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    padding: 0rem 7rem;
    height: 90%;
`;

export const Icon = styled.div`
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;

    img{
        max-width: 100%;
    }

    P{
        font-size: 7rem;
        font-weight: 100;
    }
`;

export const Date = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: .2rem solid #F3F4F6;
    margin-bottom: 3rem;

    p{
        font-weight: bold;
    }

    span{
        font-size: 1.5rem;
        width: 100%;
        display: block;
    }
`;

export const Cidade = styled.div`
    display: flex;
    align-items: center;
    gap: .4rem;

    img{
        max-width: 20%;
    }
`;

export const hora = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const Estado = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    

    span{
        font-size: 1.6rem;
        font-weight: bold;
    }
`;

export const ContentHoras = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;


`;