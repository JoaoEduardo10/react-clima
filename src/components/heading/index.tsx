import { useMyContext } from '../../contexts'
import * as S from './style'

import { RiCelsiusFill } from "react-icons/ri"
import { TbTemperatureFahrenheit } from 'react-icons/tb'
import { BsMoon } from "react-icons/bs"
import { FiSun } from "react-icons/fi"
import { useState } from 'react'
import { ForActions } from '../../contexts/enum'

export const Heading = () => {
    const {state, dispatch } = useMyContext()
    const [tempCelcios] = useState(false)
    const [tempfarenheit] = useState(true)


    const handleClickCelcios = () => {
        dispatch({ type: ForActions.TEMP, payload: tempCelcios })
    }

    const handleClickfire = () => {
        dispatch({ type: ForActions.TEMP, payload: tempfarenheit })
    }

    const handleClick = () => {
        
        dispatch({ type: ForActions.COR, payload: false })
        if(!state.cor) {
            dispatch({ type: ForActions.COR, payload: true })
        }
        console.log(state.cor)
        
    }

    return (
        <S.Conteiner>
            <S.Text cor={state.cor}>Bem Vindo {state.nome}</S.Text>
            <S.Itens cor={state.cor} statu={state.temp}>
                <S.ConteinerItens className='C' onClick={handleClickCelcios}> 
                    <RiCelsiusFill/>
                </S.ConteinerItens>
                <S.ConteinerItens className='F' onClick={handleClickfire}> 
                    <TbTemperatureFahrenheit/>
                </S.ConteinerItens>
                {!state.cor ? 
                <div>
                    <BsMoon 
                        onClick={handleClick} 
                        className='escuro' 
                    />
                </div> : 
                <div>
                    <FiSun 
                        onClick={handleClick} 
                        className='claro' 
                    />
                </div>}
            </S.Itens>
        </S.Conteiner>
    )
}