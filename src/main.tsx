import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/App'
import { Clima } from './pages/Clima'

import { GlobalStyle } from './style/globalStyle'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContext } from './contexts'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clima' element={<Clima />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </AppContext>
  </React.StrictMode>
)
