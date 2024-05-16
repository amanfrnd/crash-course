import React,{useState} from 'react'
import './App.css'
import Checkbox from './component/Checkbox'
import PasswordRange from './component/PasswordRange'
import PasswordShow from './component/PasswordShow'

function App() {
  return (
    <>
      <h3>Password Generator</h3>
      <div className="password-generate-container">
        <Checkbox />
      </div>

    </>
  )
}

export default App
