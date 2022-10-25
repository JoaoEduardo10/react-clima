import { ForActions } from '../contexts/enum'

export type DataProps = {
    nome: string,
    cidade: string,
    page: number,
    cor: boolean,
    temp: boolean,
    erro: boolean
}

export type ActionProps = {
    type: ForActions, 
    payload: any
}

export type ContextProps = { 
        state: DataProps, 
        dispatch: (actions: ActionProps) => void
}

export type ClimaProps = {
    	
coord: {
    lon: number
    lat: number
}
weather: {
    0: {
        id:	number
        main: string
        description: string
        icon: string
        base: string
    }
}
main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}
name: string
wind: {
    speed: number
    deg: number
}
clouds:{
    all: number
    dt: number
}
sys: {
    type: number
    country: string
    sunrise: number
    sunset: number
    timezone: number
    cod: number
}
visibility: number
}