import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> 
       <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
        <p>
          Editez le fichier <code>src/App.jsx</code> et sauvegarde pout tester HMR
        </p>
      </div>

<input type="text" placeholder="Enter User Name " />
<p>Salut la famille voici ma première APP avec Vite + React.js</p>
      <p className="read-the-docs">
        Cliquer sur les logos Vite et React pour en apprendre d'avantage
      </p>
    </>
  )
}

export default App
