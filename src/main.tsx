import React from 'react'
import { createRoot } from 'react-dom/client'
import { ColorSchemeProvider } from 'shared/hooks/useColorScheme'
import GlobalStyles from 'components/GlobalStyles'
import App from 'components/App'
import './styles.scss'

const container = document.getElementById('root')
createRoot(container!).render(
  <React.StrictMode>
    <ColorSchemeProvider>
      <GlobalStyles />
      <App />
    </ColorSchemeProvider>
  </React.StrictMode>
)
