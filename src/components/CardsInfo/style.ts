import styled from 'styled-components';

export const Conteiner  = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    margin-top: 7rem;
`;

export const Card = styled.div<{ state: boolean }>`
    background-color: ${props => props.state ? "#161616" : "#FCFCFC"};
    min-height: 22.3rem;
    width: 19.3rem;
    border-radius: 1rem;
    box-shadow: 1rem 1rem .3rem ${props => props.state ? "#000" : "#ccc"};
    padding: 2rem;
`;

export const Heading = styled.h2`
    color: #696969;
    margin: 0 0 3rem 0;
    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .vento{
        margin-top: 2rem;
    }
`;

export const Icon = styled.div`
    font-size: 5rem;


`;

export const ContentInfo = styled.div`
    font-size: 3rem;
    text-align: center;
    position: relative;

    span{
        font-size: 1rem;
        position: absolute;
        top: 5%;
    }
`;

