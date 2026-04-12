import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div>
        <h1> Welcome to my React App</h1>
        <p>
          Name: Laurence Ser
          

        </p>
      </div>
    </>
  )
}

export default App