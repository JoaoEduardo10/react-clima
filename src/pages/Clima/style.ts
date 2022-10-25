import styled from 'styled-components';

export const Conteiner  = styled.div`
    display: flex;
    height: 100vh;

    @media (max-width: 832px) {
        flex-direction: column;
    }
`;