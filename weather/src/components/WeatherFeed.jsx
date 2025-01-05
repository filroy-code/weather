import { useState } from 'react'

//takes the days array 
export default function WeatherFeed(props) {
    let [weatherFeed, setWeatherFeed] = useState()

    function generateWeatherFeed(weatherData) {
        let weatherCards = weatherData.map((day, index) => {
          return (
            <div className="weatherCard" key={index}>
              {day.datetime}
              </div>
          );
        });
        setWeatherFeed(weatherCards);
      }

      /* generateWeatherFeed(props.weatherArray.days) */

    return (
        <div className='weatherFeed'>
            <button onClick={() => generateWeatherFeed(props.weatherArray)}>Generate Feed</button>
            {weatherFeed ? weatherFeed : null}
        </div>
    )
}