import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSec from './Components/HeroSec'
import Header from './Components/Header'
import Services from './Components/Services'
import Filling from './Components/Filling'
import Infomation from './Components/Infomation'
import Faqs from './Components/Faqs'
import Item from './Components/Item'
import Contacts from './Components/Contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className="mx-auto max-w-[1500px] flex flex-col">
      <HeroSec/>
      <Services/>
      <Filling/>
      <Infomation/>
      <Faqs/>
      <Item/>
      <Contacts/>
      
      </div>
    </div>
  )
}

export default App
