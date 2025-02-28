import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [sum, setSum] = useState(0)

    const fetchAddResults = async (num1, num2) => {
        console.log("Sending request to the backend...");
        const apiUrl = `/api/calculator/add?firstValue=${num1}&secondValue=${num2}`;

        axios.get(apiUrl, { responseType: 'json'})
            .then(response => {
                //console.log(response);
                setSum(response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the result:", error);
            });
    };

  return (
    <>
      <h1>Combined Effort Calculator</h1>
        <p>(Using backend developed calculator API - with competing requirements)</p>
        <div className="card">
            <input className="larger-input" size="6" type="number" value={firstNumber} onChange={e => setFirstNumber(Number(e.target.value))} />
            <span className="larger"> + </span>
            <input className="larger-input" type="number" value={secondNumber} onChange={e => setSecondNumber(Number(e.target.value))} />
        </div>
        <div className="card larger">
            <label>My best guess is {sum}</label>
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
