import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Fundo from './components/Fundo/Fundo.jsx'
import './App.css'
import { BrowserRouter } from "react-router-dom";

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Fundo/>
      </BrowserRouter>
    </div>
  )
}

