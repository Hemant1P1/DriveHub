import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

function App() {
  

  return (
    <>
      <h1 class='mx-auto bg-red-200 outline-black text-gray-500'>Aniket Tikkal</h1>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
