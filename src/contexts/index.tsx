import { useContext, useReducer } from "react"
import { Context } from "./context"
import { data } from "./data"
import { reducer } from "./reducer"

type AppContextProps = {
    children: React.ReactNode
}

export const AppContext = ({ children }: AppContextProps) => {
    const [state, dispatch] = useReducer(reducer, data)
    const value = {state, dispatch}

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useMyContext = () => {
    const context = useContext(Context)

    if(context === undefined){
        throw new Error('O componente <AppContext /> não esta adicionado!')
    }

    return context
}