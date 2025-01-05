import { useState } from 'react'
import WeatherFeed from './components/WeatherFeed'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState([{datetime: '-5'},{datetime: '-4'}])

  async function getData(location) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=FFYXH369VAFUZNNC2L7V2GSKG&contentType=json`)
    let responseJSON = await response.json();
    setWeatherData(responseJSON.days)
    console.log(responseJSON.days)
  }

  function updateLocation(input) {
    setLocation(input)
  }

  

  function updateCount() {
    setCount(count => count + 1);
    getData()
    console.log(location)
  }

  function arrayMap() {
    weatherData.map((day) => console.log(day.datetime))
  }

  return (
    <>
    <p>
     Hello world! The count is {count}.
     </p>
     <input onChange={(event) => updateLocation(event.target.value)}></input>
     <p>{location}</p>
     <button onClick={() => getData(location)}>Search</button>
     <button onClick={arrayMap}>Arraycheck</button>
      {weatherData ? <WeatherFeed weatherArray={weatherData} /> : null}
    </>
  )
}

export default App
