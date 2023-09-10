import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { useStore } from './hooks/useStore'

function App() {

  const { fromLenguage, setFromLenguage } = useStore()

  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => {
        setFromLenguage('es')
      }}>Change to spanish</button>
      {fromLenguage}
    </>
  )
}

export default App
