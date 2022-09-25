import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Poppins',
        colors: {
          brand: [
            '#f4e8ff',
            '#d8bcf7',
            '#bc91ee',
            '#a165e6',
            '#863ade',
            '#6c21c4',
            '#541999',
            '#3c116e',
            '#240944',
            '#0e011b'
          ]
        },
        primaryColor: 'brand'
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
