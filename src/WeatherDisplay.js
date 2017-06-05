import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherDisplay extends Component {
  state = {
    weatherData : null
  }

  componentDidMount() {
    console.log('didmount');
    const URL = `http://api.openweathermap.org/data/2.5/weather?id=${this.props.id}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;
    fetch(URL)
      .then(resp => resp.json())
      .then(weatherData => this.setState({ weatherData }) )
  }

  render() {
    let { weatherData } =  this.state;
    console.log(weatherData);

    if (!weatherData) {
      return (
        <div>Choose your city:</div>
      )
    } else {
      let weather = weatherData.weather[0];
      let iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
      return (
        <div>
          <h1>
            {weather.main} in {weatherData.name}
            <img src={iconUrl} alt={weatherData.description} />
          </h1>
          <p>Current: {weatherData.main.temp}°</p>
          <p>High: {weatherData.main.temp_max}°</p>
          <p>Low: {weatherData.main.temp_min}°</p>
          <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
        </div>
      )
    }
  }
}

WeatherDisplay.propTypes ={
  cid : PropTypes.string
}

export default WeatherDisplay;
