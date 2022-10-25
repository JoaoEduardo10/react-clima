import styled from 'styled-components';

export const Conteiner  = styled.div<{ cor: boolean }>`
    background-color: ${props => props.cor ? "#121212" : "#F3F4F6"};
    width: 67%;

`;