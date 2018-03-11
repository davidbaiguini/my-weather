import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {fetchForecast, forecastSelector, fiveDaysForecast} from 'store/weather';
import NextDaysForecast from './NextDaysForecast'

// State
const mapStateToProps = (state) => {
    return {
        forecast: forecastSelector(state),
        chartData: fiveDaysForecast(state),
    }
}

// Actions
const mapDispatchToProps = (dispatch) => {
    return {
        fetchForecast: () => {
            dispatch(fetchForecast())
        }
    }
}

// withRouter allow us to access the history and handle the 'active' route
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NextDaysForecast))
