import { Link } from 'react-router-dom'
import * as S from './style'

export const Erro404 = () => {
    return (
        <S.Conteiner>
            <h1>Erro 404</h1>
            <p>Esta aplicaçao e muito sensivel. Então sempre que voçê digitar o nome da sua cidade errado, vai cair nesse erro.</p>
            <Link to={'/'}>Voltar</Link>
        </S.Conteiner>
    )
}