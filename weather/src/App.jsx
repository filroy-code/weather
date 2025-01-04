import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  async function getData() {
    let response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=metric&key=FFYXH369VAFUZNNC2L7V2GSKG&contentType=json')
    let responseJSON = await response.json();
    console.log(responseJSON)
  }

  function updateCount() {
    setCount(count => count + 1);
    getData()
  }

  return (
    <>
    <p>
     Hello world! The count is {count}.
     </p>
     <button onClick={updateCount}>Click me!</button>
    </>
  )
}

export default App
