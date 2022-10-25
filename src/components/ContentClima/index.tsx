import * as S from './style'

import { AiOutlineSearch, AiOutlineCloud } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md"
import { ClimaProps } from '../../types/types';
import { getDate, getHors, getTemp } from '../../theme/theme';
import { useMyContext } from '../../contexts';

type Props = {
    clima: ClimaProps | undefined
}

export const ContentClima = ( { clima }: Props) => {
    const { state } = useMyContext()

    const date = new Date()

    const [dia, mes] = getDate(date)
    const temp = Number(clima?.main.temp.toFixed())
    const temperatura = getTemp( temp , state.temp)

    return (
        <S.Conteiner cor={state.cor}>
            <S.ConteinerInpult cor={state.cor}>
                <AiOutlineSearch />
                <S.Input 
                    type={'text'} 
                    placeholder="Procurar por lugar"
                    cor={state.cor}
                />
                <BiMap className='svgMep' />
            </S.ConteinerInpult>
            <S.Info>
                <S.Icon>
                    <img src={`https://openweathermap.org/img/wn/${clima?.weather[0].icon}.png`} alt="icon" />
                    <p>{temperatura}</p>
                </S.Icon>
                <S.Date>
                    <S.Cidade>
                        <p>{clima?.name}</p>
                        <img src={`https://countryflagsapi.com/png/${clima?.sys.country}`} alt={`Pais ${clima?.sys.country}`} />
                    </S.Cidade>
                    <span>{dia}, {mes} {date.getDay()}</span>
                </S.Date>
                <S.hora>
                    <S.Estado>
                        <AiOutlineCloud />
                        <span> {clima?.weather[0].description}</span>
                    </S.Estado>
                    <S.ContentHoras>
                        <MdOutlineWatchLater />
                        <span>{getHors(date)}</span>
                    </S.ContentHoras>
                </S.hora>
            </S.Info>
        </S.Conteiner>
    )
}