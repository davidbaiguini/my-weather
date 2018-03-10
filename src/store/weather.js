/*
 * action types
 */
export const FETCH_DATA_SUCCEEDED = 'FETCH_DATA_SUCCEEDED'

/*
 * action creators
 */
export function fetchDataSucceeded(data) {
    return {type: FETCH_DATA_SUCCEEDED, payload: {
            data
        }}
}

/*
 * initial state
 */
const initialState = {
    currentUserId: 1,
    users: [
        {
            id: 1,
            email: 'teacher@school.org',
            isAdmin: true
        }, {
            id: 2,
            email: 'student@school.org',
            isAdmin: false
        }
    ]
};

/*
 * reducers
 */
export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_SUCCEEDED:
            // return Object.assign({}, state, {   weather: action.payload.data })
            return {
                ...state,
                weather: action.payload.data
            }
        default:
            return state
    }
}
