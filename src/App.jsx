import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSec from './Components/HeroSec'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      {/**<HeroSec/>*/}
    </div>
  )
}

export default App
