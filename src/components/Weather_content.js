import TempApp from './store/TempApp'
import weatherImage from '../images/cloudy.png'
function WeatherContent(){
    return(
        <div className='card content-weather'>
            <div className='d-flex'>
                <img src={weatherImage} alt="weather" style={{width: "2rem"}}></img>
                <p style={{fontWeight: "bold"}}>Thời tiết</p>
            </div>
            <div className='d-grid'>
                <div className='item-content-weather'>
                    <TempApp name="Hanoi"/>
                </div>
                <div className='item-content-weather'>
                    <TempApp name="Bangkok"/>
                </div>
            </div>
        </div>
    );
}

export default WeatherContent;