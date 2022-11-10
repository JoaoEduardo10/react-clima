import styled from 'styled-components';

export const Conteiner  = styled.div<{ cor: boolean }>`
    flex: 1;
    background-color: ${props => props.cor ? "#161616" : "#FCFCFC"};
    height: 72.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.cor ? "#fff" : "#000"};
`;

export const ConteinerInpult = styled.div<{ cor: boolean }>`
    width: 95%;
    background-color: ${props => props.cor ? "#121212" : "#F3F4F6"};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 2rem;
    margin-top: 2rem;

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
    padding: 3rem 0rem;
    height: 90%;

    @media (max-width: 832px) {
        width: 100%;
        padding: 0 2rem;
    }
`;

export const Icon = styled.div`
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;

    img{
        max-width: 100vw;
    }

    P{
        font-size: 7rem;
        font-weight: 100;
    }

    @media (max-width: 832px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4rem;

        img{
            min-width: 13rem;
        }

        p{
            font-size: 3rem;
        }
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
    flex: 1;

    p{
        font-weight: bold;
    }

    .horas {
        margin-left: 6rem;
    }

    @media (max-width: 832px) {
        span{
            font-size: 2rem;
            flex: 1;
            text-align: center;
        }
    }
`;

export const Cidade = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    gap: .2rem;
    
    @media (max-width: 832px) {
        flex: 1;
    }

    img{
        max-width: 3rem;
        margin-right: .5rem;
    }

`;

export const hora = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 832px) {
        margin-bottom: 3rem;
    }
    
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