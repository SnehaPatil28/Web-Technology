import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* <h1>Example 1: Counter Program</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button> */}
    
      <h1>Example 2: Show /Hide Text</h1>

      <button onClick={() => setShow(!show)}>Toggle</button>
    
      {show && <h2>Hello Student!</h2>}
    </>
  )
}

export default App
