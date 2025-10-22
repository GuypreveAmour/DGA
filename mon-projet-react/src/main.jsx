import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App001 from './App001.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
createRoot(document.getElementById('root001')).render(
<StrictMode>
<App001 />
<hr/>
<h2> Salut Une autre root créée depuis le fichier </h2>
<a href="#" >  Main.jsx </a>
</StrictMode>
)
