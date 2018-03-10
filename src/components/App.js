import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import css from './App.css';

import Header from 'components/partials/Header';
import TodayForecast from 'components/pages/TodayForecast';
import NextDaysForecast from 'components/pages/NextDaysForecast';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header/>
            <div>
                <Route exact path="/" component={TodayForecast}/>
                <Route exact path="/nextDaysForecast" component={NextDaysForecast}/>
            </div>
        </div>
      </Router>
    )
  }
}

export default App;
