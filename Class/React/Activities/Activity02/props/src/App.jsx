import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Props in React</h1>

     <Student name="Rakhi" age="21" course="AIML"></Student>
    </>
  )
}

export default App
