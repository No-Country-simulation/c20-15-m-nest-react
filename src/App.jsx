import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>

        </header>
        <LoginForm />

          <h1> Banca Online</h1>
        </header>
          <h2>Hola!Te damos la Bienvenida <br></br> Banca Online</h2>
          <input type="text" placeholder="Usuario" /><br></br>
          <input type="text" placeholder="Clave Digital" />
          <p>▢Guardar usuario y contraseña</p>
          <button>Ingresar</button>
          <p>¿ Olvidaste o bloqueaste tu Usuario y/o <br></br>clave digital?</p>
          <p>Si es la primera vez que ingresas a Banca Online ,<strong>registrate</strong></p>
      </div>
    </>
  )
}

export default App
