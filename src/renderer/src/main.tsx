import ReactDOM from 'react-dom/client'
import './assets/index.css'
import '@ringcentral/video-sdk-react/dist/index.css'
import App from './App'
import { ModeProvider } from './context/mode'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ModeProvider>
      <App />
    </ModeProvider>
  </BrowserRouter>
)
