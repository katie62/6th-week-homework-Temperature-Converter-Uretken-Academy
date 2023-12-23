import { useState } from 'react'
import './App.css'
import TempConvert from '../src/components/TempConvert';


function App() {
  return (
    <div className="App">
      <div className="converter-card">
        <h1 className="app-title">
          Temperature Converter
        </h1>
       <TempConvert/>
      </div>
    </div>
  )
}

export default App
