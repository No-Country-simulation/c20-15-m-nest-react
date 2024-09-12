

import './App.css'
import Transferencia from './transferencia'
import { Login } from "./components/Login";
import {Register} from './components/Register'
// import NavBar from './NavBar'

import NavBar from './components/navBar'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
//  import RegisterForm from './components/RegisterForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
    <Router>
          <div>

         
          <div><Transferencia></Transferencia></div>  
       
       
</div>

          <div className="content">
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}>
                    
                </Route>
                <Route path="/login" element={<LoginForm></LoginForm>}>
                    
                </Route>
                {/* <Route path="/register" element={<RegisterForm></RegisterForm>}>
                   
                </Route> */}
                <Route path="/transferencia" element={<Transferencia></Transferencia>}>
                    
                </Route>
                <Route path="/loginForm" element={<Login></Login>}>

           {/* <NavBar></NavBar>   */}

        {/* <header> */}
{/*  */}
{/*  */}
          {/* <h1> Banca Online</h1> */}
        {/* </header> */}


           {/* <LoginForm />    */}
        
        </Router>
    </>
  )

}

export default App;
