
import { act } from 'react-dom/test-utils';
import { GET_DETAIL_DATA_MOVIE, GET_USER_ID, CHANGE_STATE_DETAIL_MOVIES, ERROR_DETAIL_MOVIES } from '../types/detailMoviesTypes'

const INITIAL_STATE = {
    guest_session_id: null,
    state: 'idle',
    error: null,
    stateRateMovie: { state: 'idle', error: null }
}

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case GET_DETAIL_DATA_MOVIE:
            return { ...state, ...action.payload, loading: false, error: "" }
            break;
        case GET_USER_ID:
            return { ...state, ...action.payload }
        case CHANGE_STATE_DETAIL_MOVIES:
            return { ...state, ...action.payload }
            break;
        case ERROR_DETAIL_MOVIES:
            return { ...state, ...action.payload }
            break;
        default:
            return state
            break;
    }
}
