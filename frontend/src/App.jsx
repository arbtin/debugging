import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [sum, setSum] = useState(0)

    const fetchAddResults = (num1, num2) => {
        console.log("getting your result...")
        axios.get(`/api/calculator/add?firstValue=${num1}&secondValue=${num2}`)
            .then(result => setSum(result.data + 2))
    }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Combined Effort Calculator</h1>
        <p>(Using backend developed calculator API - with competing requirements)</p>
        <div className="card">
            <input type="number" value={firstNumber} onChange={e => setFirstNumber(Number(e.target.value))} />
            <span> + </span>
            <input type="number" value={secondNumber} onChange={e => setSecondNumber(Number(e.target.value))} />
        </div>
        <div className="card">
            <label>My best educated guess is {sum}</label>
        </div>
        <div className="card">
           <button onClick={() => fetchAddResults(firstNumber, secondNumber)}>
                Calculate Sum
            </button>
        </div>
    </>
  )
}

export default App
