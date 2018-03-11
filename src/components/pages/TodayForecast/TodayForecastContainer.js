import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {fetchWeather, todayWeatherSelector} from 'store/weather';
import TodayForecast from './TodayForecast'

// State
const mapStateToProps = (state) => {
    return {
        todayWeather: todayWeatherSelector(state),
    }
}

// Actions
const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: () => {
            dispatch(fetchWeather())
        }
    }
}

// withRouter allow us to access the history and handle the 'active' route
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodayForecast))
