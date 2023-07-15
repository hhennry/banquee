import React from 'react'
import ReactDOM from 'react-dom/client'
import { Pages } from '.'

ReactDOM.createRoot(document.getElementById('home') as HTMLElement).render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
)
