import * as S from './style'

import { AiOutlineSearch, AiOutlineCloud } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md"
import { ClimaProps } from '../../types/types';
import { getDate, getHors, getTemp } from '../../theme/theme';
import { useMyContext } from '../../contexts';
import { useState } from 'react';
import { ForActions } from '../../contexts/enum';

type Props = {
    clima: ClimaProps | undefined
}

export const ContentClima = ( { clima }: Props) => {
    const { state, dispatch } = useMyContext()
    const [value, setvalue] = useState("")

    const date = new Date()

    const [dia, mes] = getDate(date)
    const temperatura = getTemp( Number(clima?.main.temp.toFixed()) , state.temp)

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            if(value === ""){
                alert('Digite o nome de uma cidae')
                return;
            }
            dispatch({ type: ForActions.CIDADE, payload: value })
            setvalue('')
        }
    }
    return (
        <S.Conteiner cor={state.cor}>
            <S.ConteinerInpult cor={state.cor}>
                <AiOutlineSearch />
                <S.Input  
                    type={'text'} 
                    placeholder="Procurar por lugar"
                    cor={state.cor}
                    onKeyUp={handleKeyUp}
                    value={value}
                    onChange={({ target }) => setvalue(target.value)}
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
                        <img src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${clima?.sys.country}.svg`} alt={`Pais ${clima?.sys.country}`} />
                    </S.Cidade>
                    <span className='horas'>{date.getDate()}/{mes} </span>
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