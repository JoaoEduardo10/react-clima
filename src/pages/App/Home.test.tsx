import "@testing-library/jest-dom"
import 'jest-styled-components'

import img from "../../img/fundo-clima.jpg";

import Home from './'

import { renderRoutes } from '../../theme/theme'
import { screen } from "@testing-library/react"



describe('<Home />', () => {
    it("should render Home", () => {
        renderRoutes(<Home />, "/")

        const divPai = screen.getByRole('application')

        expect(divPai).toHaveStyleRule('background', `url(${img})`)

    })

    it("should render the home section", () => {
        renderRoutes(<Home />, "/")

        const section = screen.getByRole('heading', { name: "Bem vindo!" }).parentNode

        expect(section).toHaveStyleRule('background-image', "linear-gradient(140deg,#507BA5,#E4ADA7)")
    })

    it("should render button end input", () => {
        renderRoutes(<Home />, "/")

        const inputNome = screen.getByPlaceholderText('Nome')
        const inputCidade = screen.getByPlaceholderText('Cidade')
        const button = screen.getByRole('button')

        expect(inputNome).toBeInTheDocument()
        expect(inputCidade).toBeInTheDocument()
        expect(button).toBeInTheDocument()

    })

    it("should render button end input", () => {
        const { container } = renderRoutes(<Home />, "/")

        expect(container.firstChild).toMatchSnapshot()

    })
})