import TopBar from './components/TopBar'
import { useState } from 'react'

function App() {
  const [isoverlay, setIsOverlay] = useState(false);
  return (
    <>
    <TopBar></TopBar>
    <h1 className='text-lg'>Hello World</h1>
    </>
  )
}

export default App
