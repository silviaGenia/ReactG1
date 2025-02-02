import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreApp } from './StoreApp'
import './index.css'
import { NavBar } from './NavBar'
import { Button } from './Button'
import { Proptype } from './Proptype'
import { ButtonApp } from './ButtonApp'
import { CounterApp } from './CounterApp'
import { CountApp } from './CountApp'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StoreApp
      nombre="Sucre"
      direccion="Olañeta # 500"
      contacto="12312234"
    /> */}

    {/* <NavBar description="Rutas" />
    <NavBar description="paginas" /> */}


    {/* <Button label="Guardar" color="white" />
    <Button label="Cancelar" color="red" /> */}

    {/* <Proptype title="Clase" /> */}

    {/*  <ButtonApp /> */}
    {/* <CounterApp value={10} /> */}
    <CountApp />

  </React.StrictMode>
)