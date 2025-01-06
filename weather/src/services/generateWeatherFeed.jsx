import ConditionsTile from "../components/ConditionsTile";

export default function generateWeatherFeed(weatherData) {
  let weatherCards = weatherData.map((day, index) => {
    if (index < 14) /* generate 14 cards instead of 15 */
    return (
      <div className="weatherCard" key={index}>
        <div>Date: {day.datetime}</div>
        <div>High: {day.tempmax} <sup>o</sup>C</div>
        <div>Low: {day.tempmin}<sup>o</sup>C</div>
        <ConditionsTile icon={day.icon}/>
      </div>
    );
  });
  return weatherCards;
}
