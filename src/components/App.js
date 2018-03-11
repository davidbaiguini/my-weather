import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import css from './App.css';

import Header from 'components/partials/Header';
import TodayWeather from 'components/pages/TodayWeather/TodayWeatherContainer';
import NextDaysForecast from 'components/pages/NextDaysForecast/NextDaysForecastContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header/>
            <div>
                <Route exact path="/" component={TodayWeather}/>
                <Route exact path="/nextDaysForecast" component={NextDaysForecast}/>
            </div>
        </div>
      </Router>
    )
  }
}

export default App;
