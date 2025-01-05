import { useState } from 'react'
import generateWeatherFeed from './services/generateWeatherFeed'
import './App.css'

function App() {
  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState([{datetime: '-5'},{datetime: '-4'}])
  let [weatherFeed, setWeatherFeed] = useState()

  async function getData(location) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=FFYXH369VAFUZNNC2L7V2GSKG&contentType=json`)
    let responseJSON = await response.json();
    setWeatherFeed(generateWeatherFeed(responseJSON.days))
  }

  function updateLocation(input) {
    setLocation(input)
  }

  return (
    <>
    <h1>Weather App</h1>
     <input onChange={(event) => updateLocation(event.target.value)}></input>
     <p>{location}</p>
     <button onClick={() => getData(location)}>Search</button>
      {weatherFeed ? <div className="weatherFeed">{weatherFeed}</div> : null}
    </>
  )
}

export default App
