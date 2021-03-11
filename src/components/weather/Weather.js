import React, { Component } from "react";
import "./weather.scss";




class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    gettingWeather = async () => {
        // TODO: get city from global State
        const city = "Minsk"
        
        const api = "3a1a4c383125a433d9e95b1ec194e6a0";
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
        const data = await api_url.json();

        const description = data.weather[0].description;
        const kelvin = `${data.main.temp}`;
        const humidity = ` ${data.main.humidity}`;
        const wind = `${data.wind.speed}`;
        const icon = data.weather[0].icon;
        return{description, kelvin, humidity, wind, icon}
    }
    componentDidMount(){
        this.gettingWeather().then(data=>this.setState(data))
    }
    
    render() { 
        const temp = Math.round(this.state.kelvin - 273.15);
        return (
            <div className='weather'>
                <div className='weather__wrapper'>
                    <img className='weather__wrapper__img' src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt='icon' />
                    <div className='weather__wrapper__description'>{this.state.description}</div>
                </div>

                <div className='weather__info'>
                    <div className='weather__info__temperature'>{temp}°C</div>
                    <div className='weather__info__wind'>wind: {this.state.wind} km/h</div>
                    <div className='weather__info__humidity'>humidity: {this.state.humidity}%</div>
                </div>
            </div>
        );
    }
}

export default Weather;