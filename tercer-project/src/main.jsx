import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { DarkModeToggle } from './01-useState/DarkModeToggle'
import { LoginForm } from './01-useState/LoginForm'
import { WelcomeMessage } from './02-useEffect/WelcomeMessage'
import { Saludo } from './01-useState/Saludo'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/*  <CounterApp /> */}
    {/*  <DarkModeToggle /> */}
    {/*  <LoginForm /> */}
    {/*  <WelcomeMessage /> */}
    <Saludo />
  </StrictMode>,
)
