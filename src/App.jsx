import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compent/Header'
import Footer from './compent/Footer'
import Row1 from './compent/Row1'
import Row2 from './compent/Row2'
import Row3 from './compent/Row3'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header/>
  <main className='h-screen'>

<Row1/>
<Row2/>
<Row3/>

  </main>

  {/* <Footer/> */}
  </>
  
  )
}

export default App
