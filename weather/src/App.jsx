import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [location, setLocation] = useState("")

  async function getData(location) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=FFYXH369VAFUZNNC2L7V2GSKG&contentType=json`)
    let responseJSON = await response.json();
    console.log(responseJSON)
  }

  function updateLocation(input) {
    setLocation(input)
  }

  function updateCount() {
    setCount(count => count + 1);
    getData()
    console.log(location)
  }

  return (
    <>
    <p>
     Hello world! The count is {count}.
     </p>
     <input onChange={(event) => updateLocation(event.target.value)}></input>
     <p>{location}</p>
     <button onClick={updateCount}>Click me!</button>
    </>
  )
}

export default App
