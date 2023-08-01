import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/normalize.css'
import './styles/index.css'
import { Wrapper } from 'components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
)
