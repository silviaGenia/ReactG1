import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreApp } from './StoreApp'
import './index.css'
import { NavBar } from './NavBar'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreApp
      nombre="Sucre"
      direccion="Olañeta # 500"
      contacto="12312234"
    />
    <NavBar nombre="Sucre" />
  </React.StrictMode>
)