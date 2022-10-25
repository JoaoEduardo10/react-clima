import { ClimaProps } from '../../types/types'
import { CardsInfo } from '../CardsInfo'
import * as S from './style'

type Props = {
    clima: ClimaProps | undefined
}

export const MainInfo = ({ clima }: Props) => {
    return (
        <S.Conteiner>
            <CardsInfo 
                humidade={clima?.main.humidity} 
                vento={clima?.wind.speed}
                tempo={clima?.main.temp}
                visibilidade={clima?.visibility}
            />
        </S.Conteiner>
    )
}