import * as S from './style'
import imgFudo from "../../img/fundo-clima.jpg";
import { Form } from '../../components/Form/';

const Home = () => {
  return (
    <S.Conteiner img={imgFudo} role={'application'}>
      <S.ConteinerForm>
        <h1>Bem vindo!</h1>
        <p className='description'>Antes de proceguimos digite seu nome e o nome de sua cidade.</p>
        <Form />
      </S.ConteinerForm>
    </S.Conteiner>
  )
}

export default Home
