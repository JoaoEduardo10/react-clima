import { useMyContext } from '../../contexts'
import { ClimaProps } from '../../types/types'
import { Heading } from '../heading'
import { MainInfo } from '../MainInfo'
import * as S from './style'

type Props = {
    clima: ClimaProps | undefined
}

export const ContentInfo = ({ clima }: Props) => {
    const { state } = useMyContext()
    return (
        <S.Conteiner cor={state.cor}>
            <Heading />
            <MainInfo clima={clima} />
        </S.Conteiner>
    )
}