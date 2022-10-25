import { ContentClima } from '../../components/ContentClima'
import { ContentInfo } from '../../components/ContentInfo'

import { getApi } from '../../theme/theme'

import { useEffect, useState } from 'react'

import * as S from './style'
import { useMyContext } from '../../contexts'
import { useNavigate } from 'react-router-dom'
import { ForActions } from '../../contexts/enum'
import { ClimaProps } from '../../types/types'

const apiClima = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_KEY

export const Clima = () => {
    const { state, dispatch } = useMyContext()
    const [clima, setClima] = useState<ClimaProps>()
    
    const navegate = useNavigate()

    

    useEffect(() => {
        if(state.cidade == ""){
            navegate('/')
            return;
        }
        dispatch({ type: ForActions.PAGE, payload: 2 })
        
        const apiClimaUrl = `${apiClima}q=${state.cidade}&units=metric&appid=${apiKey}&lang=pt_br`  
        
        getApi(apiClimaUrl, setClima)

    }, [])
    
    return (
        <S.Conteiner>
            <ContentClima clima={clima} />
            <ContentInfo />
        </S.Conteiner>
    )
}