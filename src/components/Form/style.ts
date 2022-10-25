import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
`;

export const Label = styled.label`
    margin-bottom: 3rem;

    span{
        font-size: 1.8rem;
        color: #363636;
    }
    p{
        font-size: 1.5rem;
    }

    p.red{
        color: red;
    }

    p.withe{
        color: #fff;
    }

`;

export const Input = styled.input<{ erro: boolean }>`
    display: block;
    width: 38rem;
    margin-top: 1.5rem;
    margin-bottom: .6rem;
    padding: 1.8rem;
    font-size: 1.6rem;
    border: .1rem solid ${props => props.erro ? "red" : "#029b99"};
    outline: none;
    border-radius: .5rem;

    &:focus {
        border: .2rem solid #036564;
        background-color: #362D3E;
        color: #fff;
    }
`;

export const Button = styled.button`
    width: 20rem;
    height: 5rem;
    border-radius: 2rem;
    border: 1px solid #AE9DB2;
    box-shadow: .1rem .1rem .5rem #ccc;
    cursor: pointer;
    background-color: #372F3E;
    color: #fff;
    transition: all .5s;

    &:hover{
        background-color: #5D323E;
        color: #fff;
    }
`;