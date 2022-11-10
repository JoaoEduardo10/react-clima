import * as S from './style'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMyContext } from '../../contexts';
import { ForActions } from '../../contexts/enum';

export const Form = () => {
    const [valueName, setValueName] = useState('')
    const [valueCidade, setValueCidade] = useState('')
    const [erro, setErro] = useState(false)
    const [erroName, setErroName] = useState(false)
    const navegate = useNavigate()

    const { dispatch, state } = useMyContext()

    useEffect(() => {
        dispatch({ type: ForActions.PAGE, payload: 1})
      }, [])

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
    
        if(valueName === ""){
          setErroName(e => !e)
          return
        }
    
        if(valueCidade === ""){
          setErro(e => !e)
          return
        }
    
        dispatch({ type: ForActions.NAME, payload: valueName })
        dispatch({ type: ForActions.CIDADE, payload: valueCidade })
    
        if(erro == true){
          setErro(e => !e)
        }
    
        if(erroName == true){
          setErroName(e => !e)
        }
    
        navegate('/clima')
    
        setValueCidade("")
        setValueName("")
      }

      const sinal = state.cidade ? '?' : ''

    return (
        <S.Form onSubmit={handleSubmit}>
          <S.Label>
            <span>Primeiro nome: {state.nome}</span>
            <S.Input 
              placeholder='Nome' 
              onChange={({ target }) => setValueName(target.value)}
              erro={erroName}
              value={valueName}
            />
            { erroName && <p className='red'>Prencha o nome!</p> }
          </S.Label>
          <S.Label>
            <span>Nome da sua cidade: {state.cidade}{sinal}</span>
            <S.Input 
              placeholder='Cidade' 
              onChange={({ target }) => setValueCidade(target.value)}
              erro={erro}
              value={valueCidade}
            />
            { erro && <p className='red'>Prencha o Com nome da cidade!</p>}
            { !erro && <p className='withe'>Digite o nome da sua cidade Corretamente</p>}
          </S.Label>
          <S.Button>Começar</S.Button>
        </S.Form>        
    )
}