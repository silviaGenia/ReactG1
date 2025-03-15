import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HookApp } from './HookApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterHook } from './01-useState/CounterHook'
import { SimpleForm } from './02-useEffect/SimpleForm'


createRoot(document.getElementById('root')).render(
  //<StrictMode>

  <SimpleForm />
  //</StrictMode>,
)
