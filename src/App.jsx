import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let myobj={
  username:"Aniket",
  age:19
}
let newArr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-900 text-black-700 text-8xl font-bold rounded-4xl'>Hello Aniket</h1>
     <Card username="Aniket"/>
     <Card username="Promita"/>
    </>
  )
}

export default App
