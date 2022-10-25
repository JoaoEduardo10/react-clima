import { useMyContext } from '../../contexts'
import { Heading } from '../heading'
import * as S from './style'

export const ContentInfo = () => {
    const { state } = useMyContext()
    return (
        <S.Conteiner cor={state.cor}>
            <Heading />
        </S.Conteiner>
    )
}