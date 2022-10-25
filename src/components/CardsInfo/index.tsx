import * as S from './style'

import { RiCelsiusFill } from "react-icons/ri"
import { TbTemperatureFahrenheit } from 'react-icons/tb'
import { FaWind } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"
import { MdVisibility } from "react-icons/md"

import { useMyContext } from '../../contexts'
import { getTemp } from '../../theme/theme'

type Props = {
    humidade: number | undefined
    tempo: number | undefined
    vento: number | undefined
    visibilidade: number | undefined
}

export const CardsInfo = ({ humidade, tempo, vento, visibilidade }: Props) => {
    const { state } = useMyContext()

    return (
        <S.Conteiner>
            <S.Card state={state.cor}>
                <S.Heading>temperatura</S.Heading>
                <S.Content>
                    <S.Icon>
                        {!state.temp ? 
                        <div>
                            <RiCelsiusFill />
                        </div> : 
                        <div>
                            <TbTemperatureFahrenheit />
                        </div>
                        }
                    </S.Icon>
                    <S.ContentInfo>
                        {getTemp(Number(tempo), state.temp)}
                    </S.ContentInfo>
                </S.Content>
            </S.Card>
            <S.Card state={state.cor}>
                <S.Heading>Velocidade do vento</S.Heading>
                <S.Content>
                    <S.ContentInfo>{vento} <span>km/h</span></S.ContentInfo>
                    <S.Icon className='vento'>
                        <FaWind />
                    </S.Icon>
                </S.Content>
            </S.Card>
            <S.Card state={state.cor}>
                <S.Heading>Humidade</S.Heading>
                <S.Content>
                    <S.Icon>
                        <WiHumidity />
                    </S.Icon>
                    <S.ContentInfo>{humidade} <span>%</span> </S.ContentInfo>
                </S.Content>
            </S.Card>
            <S.Card state={state.cor}>
                <S.Heading>Visibilidade</S.Heading>
                <S.Content>
                    <S.Icon>
                        <MdVisibility />
                    </S.Icon>
                    <S.ContentInfo>{visibilidade?.toFixed()} <span>%</span> </S.ContentInfo>
                </S.Content>
            </S.Card>
        </S.Conteiner>
    )
}