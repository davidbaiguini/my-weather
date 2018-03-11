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
                {todayWeather.isLoaded && <div>Today's forecast for {todayWeather.data.name}</div>}
            </div>
        );
    }
}

TodayForecast.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    todayWeather: PropTypes.object,
}
