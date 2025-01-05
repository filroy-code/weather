export default function generateWeatherFeed(weatherData) {
  let weatherCards = weatherData.map((day, index) => {
    return (
      <div className="weatherCard" key={index}>
        <div>Date: {day.datetime}</div>
        <div>High: {day.tempmax}</div>
        <div>Low: {day.tempmin}</div>
        <div>Conditions: {day.conditions}</div>
      </div>
    );
  });
  return weatherCards;
}
