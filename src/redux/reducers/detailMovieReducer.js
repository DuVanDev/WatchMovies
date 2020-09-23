
import { GET_DETAIL_DATA_MOVIE, GET_USER_ID, LOADING, ERROR, SUCCESS, IDLE } from '../types/detailMoviesTypes'

const INITIAL_STATE = {
    guest_session_id: null,
    state: 'idle',
    error: null,
}

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case GET_DETAIL_DATA_MOVIE:
            return { ...state, ...action.payload, loading: false, error: "" }
            break;
        case GET_USER_ID:
            return { ...state, ...action.payload }
        case LOADING:
            return { ...state, state: "loading", error: null }
            break;
        case ERROR:
            return { ...state, state: "error", error: action.payload }
            break;
        case IDLE:
            return { ...state, state: "idle", error: null }
            break;
        case SUCCESS:
            return { ...state, state: "success", error: null, ...action.payload }
            break;
        default:
            return state
            break;
    }
}
