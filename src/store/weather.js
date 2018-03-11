import {createSelector} from 'reselect'
import moment from 'moment';

/*
 * action types
 */
export const FETCH_WEATHER_SUCCEEDED = 'FETCH_WEATHER_SUCCEEDED';
export const FETCH_FORECAST_SUCCEEDED = 'FETCH_FORECAST_SUCCEEDED';

/*
 * action creators
 */
export function fetchWeatherSucceeded(data) {
    return {
        type: FETCH_WEATHER_SUCCEEDED,
        payload: { data }
    }
}

export function fetchForecastSucceeded(data) {
    return {
        type: FETCH_FORECAST_SUCCEEDED,
        payload: { data }
    }
}

/*
 * initial state
 */
const initialState = {
    today: {
        isLoaded : false,
    },
    forecast: {
        isLoaded: false,
    }
};

/*
 * reducers
 */
export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_SUCCEEDED:
            return {
                ...state,
                today: {
                    data: action.payload.data,
                    isLoaded: true
                }
            }
        case FETCH_FORECAST_SUCCEEDED:
            return {
                ...state,
                forecast: {
                    data: action.payload.data,
                    isLoaded: true
                }
            }
        default:
            return state
    }
}

/*
 * side effects
 */

export function fetchWeather() {
    return (dispatch, getState) => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?APPID=061164e9c158cfaf8b2ea2b25cbcbaa2&q=Auckland,nz&units=metric'; 

        fetch(url)
            .then(r => r.json())
            .then(weather => {
            dispatch(fetchWeatherSucceeded(weather))
            });
    }
}

export function fetchForecast() {
    return (dispatch, getState) => {
        const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Auckland,nz&appid=061164e9c158cfaf8b2ea2b25cbcbaa2&units=metric';

        fetch(url)
            .then(r => r.json())
            .then(weather => {
                dispatch(fetchForecastSucceeded(weather))
            });
    }
}

/*
 * selectors
 */

export const weatherSelector = state => state.weather;

export const todayWeatherSelector = createSelector(
    weatherSelector,
    weather => weather.today
);

export const forecastSelector = createSelector(
    weatherSelector,
    weather => weather.forecast
);

export const fiveDaysForecast = createSelector(
    forecastSelector,
    forecast => {
        if (forecast.data) {
            const temperatures = forecast.data.list.map(f => f.main.temp);

            const dates = forecast.data.list.map(f =>  moment(f.dt_txt).format('D/MM/Y HA'))

            return {
                temperatures,
                dates
            }
        }
        return null;
    }
);
