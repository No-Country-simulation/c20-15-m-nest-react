import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import HomePage from './components/HomePage'

function App() {


  return (
    <>
      <div>
          <NavBar></NavBar>
      </div>

      <HomePage></HomePage>
      
      
    </>
  )
}

export default App
