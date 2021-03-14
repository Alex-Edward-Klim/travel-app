import React, { Component } from "react";
import { connect } from "react-redux";
import "./weather.scss";

// const language = "RU";
class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: true
        }
        this._isMounted = false;
    }
    
    gettingWeather = async () => {
        // TODO: get city from global State
        const city = "Minsk";
        

        const api = "68acbc07ccfa8d615fd6c1385a793700";
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&lang=${this.props.language}`);
        const data = await api_url.json();

        const description = data.weather[0].description;
        const kelvin = `${data.main.temp}`;
        const humidity = ` ${data.main.humidity}`;
        const wind = `${data.wind.speed}`;
        const icon = data.weather[0].icon;
        const isLoaded = true;

        return{description, kelvin, humidity, wind, icon, isLoaded}

    }
    componentDidMount(){
        this._isMounted = true;
        this.gettingWeather().then(data=>{
            if (this._isMounted) {
                return this.setState(data)
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.language !== nextProps.language){
            this.setState({isLoaded: false});

            this.gettingWeather().then(data=>this.setState(data))
        }
        // this.gettingWeather().then(data=>this.setState(data))
        // console.log(this.state.description ) 
        return true
    }
    
    render() { 

        const temp = Math.round(this.state.kelvin - 273.15);

        if(this.props.language == "EN"){
            return (
              <div className="weather">
                <div className="weather__wrapper">
                  {this.state.icon && (
                    <img
                      className="weather__wrapper__img"
                      src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
                      alt="icon"
                    />
                  )}
                  <div className="weather__wrapper__description">
                    {this.state.isLoaded && this.state.description}
                  </div>
                </div>

                <div className="weather__info">
                  <div className="weather__info__temperature">{temp}°C</div>
                  <div className="weather__info__wind">
                    wind: {this.state.wind} km/h
                  </div>
                  <div className="weather__info__humidity">
                    humidity: {this.state.humidity}%
                  </div>
                </div>
              </div>
            );
        }else if(this.props.language == "RU"){
            return (
              <div className="weather">
                <div className="weather__wrapper">
                  {this.state.icon && (
                    <img
                      className="weather__wrapper__img"
                      src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
                      alt="icon"
                    />
                  )}
                  <div className="weather__wrapper__description">
                    {this.state.description}
                  </div>
                </div>

                <div className="weather__info">
                  <div className="weather__info__temperature">{temp}°C</div>
                  <div className="weather__info__wind">
                    ветер: {this.state.wind} км/ч
                  </div>
                  <div className="weather__info__humidity">
                    влажность: {this.state.humidity}%
                  </div>
                </div>
              </div>
            );
        }else if(this.props.language == "BE"){
            return (
              <div className="weather">
                <div className="weather__wrapper">
                  {this.state.icon && (
                    <img
                      className="weather__wrapper__img"
                      src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
                      alt="icon"
                    />
                  )}
                  <div className="weather__wrapper__description">
                    {this.state.description}
                  </div>
                </div>

                <div className="weather__info">
                  <div className="weather__info__temperature">{temp}°C</div>
                  <div className="weather__info__wind">
                    вецер: {this.state.wind} км/г
                  </div>
                  <div className="weather__info__humidity">
                    вільготнасць: {this.state.humidity}%
                  </div>
                </div>
              </div>
            );
        }
        
    }
}
const mapStateToProps = (state) => {
    return {
    language: state.language.language
    };
};
export default connect(mapStateToProps)(Weather);

// export default Weather;