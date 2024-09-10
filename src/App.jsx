
import './App.css'
import Transferencia from './transferencia'
// import NavBar from './NavBar'

import NavBar from './components/navBar'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'


function App() {


  return (
    <>
      <div>

      
        <div><Transferencia></Transferencia></div>
        {/* <div><NavBar></NavBar></div> */}
       
</div>


          <NavBar></NavBar>

        <header>


          <h1> Banca Online</h1>
        </header>


        <LoginForm />
        <RegisterForm />

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
