import * as S from './style'
import gif from "../../img/Loadingsome.gif"

export const Carregando = () => {
    return (
        <S.Conteiner>
            <div>
                <img src={gif} alt="carrando" />
            </div>
        </S.Conteiner>
    )
}