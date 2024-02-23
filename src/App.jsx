import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compent/Header'
import Footer from './compent/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header/>
  <main className='h-screen'>

  </main>
  <Footer/>
  </>
  
  )
}

export default App
