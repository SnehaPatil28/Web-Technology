import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const showMessage = () =>{
    alert("Button clicked!!!!!");}
  return (
    <>
    <h1>Student info</h1>
    <button onClick={showMessage}>Click Me</button>
    </>
  )
}

export default App
