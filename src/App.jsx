import { useState } from 'react'
import {BrowserRouter} from "react-router-dom";
import './App.module.scss'
import Home from './components/home/home'
import Navbar from './components/home/NavBar/Navbar'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    </BrowserRouter>
    </>
  )
}

export default App
