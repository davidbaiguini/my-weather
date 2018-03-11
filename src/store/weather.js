import {createSelector} from 'reselect'

/*
 * action types
 */
export const FETCH_DATA_SUCCEEDED = 'FETCH_DATA_SUCCEEDED'

/*
 * action creators
 */
export function fetchDataSucceeded(data) {
    return {
        type: FETCH_DATA_SUCCEEDED, payload: {
        data
    }}
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
        case FETCH_DATA_SUCCEEDED:
            return {
                ...state,
                today: {
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

export function fetchWeather(url) {

    return (dispatch, getState) => {
      const url = 'http://api.openweathermap.org/data/2.5/weather?APPID=061164e9c158cfaf8b2ea2b25cbcbaa2&q=Auckland,nz&units=metric'; 
      const opts = {
       // mode: 'no-cors'
      };
      fetch(url, opts)
        .then(r => r.json())
        .then(weather => {
          dispatch(fetchDataSucceeded(weather))
        });
    }
}

/*
 * selectors
 */

export const todayWeatherSelector = state => state.weather.today;
