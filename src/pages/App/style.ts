import styled from 'styled-components';

export const Conteiner  = styled.div<{ img: string }>`
    background: url(${props => props.img});
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConteinerForm = styled.section`
    background-image: linear-gradient(140deg, #507BA5, #E4ADA7);
    width: 60vw;
    height: 85%;
    border-radius: .5rem;

    h1{
        margin-top: 7rem;
        margin-bottom: 1rem;
        text-align: center;
        font-size: 6rem;
    }
    p {
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.3rem;
        color: #fff;
    }

    @media (max-width: 1075px) {
        form{
            height: 29rem;
        }

        label{
            margin-bottom: .8rem;

            input{
                margin-bottom: .4rem;
            }
        }

        button{
            height: 40rem;
        }
    }

    @media (max-width: 657px) {

        width: 95%;

        h1{
            font-size: 4.5rem;
            margin-top: 2rem;
        }

        p.description{
            font-size: 1.2rem;
            text-align: center;
            padding: .5rem 1.4rem;
        }

        form{
            padding: 0 1rem;
            height: 29.8rem;
            margin-top: 2rem;

            p{
                font-size: 1.5rem;
                margin-top: 1rem;
            }

            label{
                width: 100%;
                margin-top: 1rem;
            
            span{
                font-size: 1.4rem;
            }

            input{
                width: 100%;
            }

            button{
                height: 2rem;
            }
        }
        }

        
    }
`;