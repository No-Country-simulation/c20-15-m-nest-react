
import './App.css'
import Transferencia from './transferencia'
// import NavBar from './NavBar'

import NavBar from './components/navBar'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
// import RegisterForm from './components/RegisterForm'


function App() {


  return (
    <>
      <div>

         
         <div><Transferencia></Transferencia></div> 
       
       
</div>


          <NavBar></NavBar>

        <header>


          <h1> Banca Online</h1>
        </header>


        <LoginForm />
        

    </>
  )
}

export default App
