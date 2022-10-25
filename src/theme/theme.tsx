import { render } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppContext } from "../contexts/"
import { GlobalStyle } from "../style/globalStyle"

import { ClimaProps } from "../types/types"

export const renderRoutes = (children: any, path: string) => {
    return render(
        <AppContext>
            <BrowserRouter>
                <Routes>
                    <Route path={path} element={children} />
                </Routes>
                <GlobalStyle />
            </BrowserRouter>
        </AppContext>
    )
}

export const getApi = async (url: string, setAlgo: React.Dispatch<React.SetStateAction<ClimaProps | undefined>>) => {
    const resp = await fetch(url)
    const data = await resp.json()

    setAlgo(data)
}

export const getDate = (data: Date): string[] => {
    const date = data
    const day = date.getDay()
    const month = date.getMonth()

    let newMonth: string = ''
    let newDay: string = ''
    let newDate: string[] = []

    const days = ["Segunda", 'Terça', 'Quarta', 'Quinta', "sexta", "Sabado", "Domingo"]
    const months = ['Janeiro', 'Fevereiro', 'Março', "Abril", 'Maio', "Junho", 'Julho', "Agosto", "Setembro", "Outubo", "Novembro", 'Dezembro']

    

    const numberMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const numberDay = [0, 1, 2, 3, 4, 5, 6]

    for(let i = 0; i < days.length; i++) {
        if(day === numberDay[i]){
            newDay = days[i]
            newDate.push(newDay)
            
        }
    }
    

    for(let i = 0; i < months.length; i++) {
        if(month == numberMonth[i]){
            newMonth = months[i]
            newDate.push(newMonth)
            
        }
    }

    return newDate
    
}

export const getHors = (date: Date): string => {
    const horas = date.getHours()
    const minutos = date.getMinutes()

    const newHoras = horas < 10 ? `0${horas}`: horas
    const newMinutos = minutos < 10 ? `0${minutos}` : minutos

    return `${newHoras}:${newMinutos}`
}

export const getTemp = (temp: number, boole: boolean) => {
    if(!boole){
        return `${temp}°C`
    }

    if(boole){
       return `${((temp * 9/5) + 32).toFixed()}°F`
    }
}