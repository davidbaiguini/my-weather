import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TodayForecast extends Component {

    componentDidMount() {
        const {fetchWeather} = this.props;
        fetchWeather();
    }

    render() {
        const {todayWeather} = this.props;

        return (
            <div>
                {todayWeather.isLoaded &&
                    <div>
                        <h1>Today's weather for {todayWeather.data.name}</h1>
                        <img src={`http://openweathermap.org/img/w/${todayWeather.data.weather[0].icon}.png`} />
                        <span>{todayWeather.data.weather[0].main}, {todayWeather.data.weather[0].description}</span>
                        <div>Temperature: {todayWeather.data.main.temp} C&deg;</div>
                        <div>Temperature (min): {todayWeather.data.main.temp_min} C&deg;</div>
                        <div>Temperature (max): {todayWeather.data.main.temp_max} C&deg;</div>
                        <div>Pressure: {todayWeather.data.main.pressure} mBar</div>
                        <div>Humidity: {todayWeather.data.main.humidity} %</div>
                    </div>
                }
            </div>
        );
    }
}

TodayForecast.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    todayWeather: PropTypes.object,
}
