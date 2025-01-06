import { useState } from 'react'
import generateWeatherFeed from './services/generateWeatherFeed'
import './App.css'

function App() {
  const [location, setLocation] = useState("")
  const [resolvedAddress, setResolvedAddress] = useState("")
  let [weatherFeed, setWeatherFeed] = useState()

  async function getData(location) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=FFYXH369VAFUZNNC2L7V2GSKG&contentType=json`)
    let responseJSON = await response.json();
    setWeatherFeed(generateWeatherFeed(responseJSON.days))
    setResolvedAddress(responseJSON.resolvedAddress)
  }

  function updateLocation(input) {
    setLocation(input)
  }

  return (
    <>
    <h1>Weather App</h1>
     <input placeholder='Enter a city...' onChange={(event) => updateLocation(event.target.value)}></input>
     <button onClick={() => getData(location)}>Search</button>
      {weatherFeed ? 
      <>
      <h3>14-day forecast for <strong>{resolvedAddress}</strong></h3>
      <div className="weatherFeed">{weatherFeed}
      </div>
      </> : null}
    </>
  )
}

export default App
