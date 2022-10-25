import { ActionProps, DataProps } from '../types/types'
import { ForActions } from './enum';

export const reducer = (state: DataProps, actions: ActionProps) => {
    switch (actions.type) {
        case ForActions.NAME:{
            return {...state, nome: actions.payload}
        }
        case ForActions.PAGE:{
            return {...state, page: actions.payload}
        }
        case ForActions.CIDADE:{
            return {...state, cidade: actions.payload}
        }
        case ForActions.COR:{
            return {...state, cor: actions.payload}
        }
        case ForActions.TEMP:{
            return {...state, temp: actions.payload}
        } 
        default:
    }

    return {...state}
}