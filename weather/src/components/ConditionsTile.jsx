import cloudy from '../assets/cloudy.png'
import rainy from '../assets/rainy.png'
import partlycloudy from '../assets/partlycloudy.png'
import snowy from '../assets/snowy.png'
import sunny from '../assets/sunny.png'

export default function ConditionsTile(props) {

    let condition

    switch (props.icon) {
        case 'snow': condition = snowy; break;
        case 'rain': condition = rainy; break;
        case 'partly-cloudy-day': condition = partlycloudy; break;
        case 'clear-day': condition = sunny; break;
        case 'cloudy': condition = cloudy;
        default: null;
    }

    return (
        <div className='conditions'>
            <img className='conditionsImg' src={condition} alt={props.icon}></img>
            <span></span>
        </div>
    )
}