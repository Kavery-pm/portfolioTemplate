import { useState } from 'react'
import {BrowserRouter} from "react-router-dom";
import './App.module.scss'
import Home from './components/home/home'
import Navbar from './components/home/NavBar/Navbar'
import BaseLayout from './layouts/BaseLayout';

function App() {
  

  return (
    <>
    <BrowserRouter>
   <BaseLayout/>
    </BrowserRouter>
    </>
  )
}

export default App
