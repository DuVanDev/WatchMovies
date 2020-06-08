import {
    GET_MOST_POPULAR_MOVIES,
    GET_TOP_RATED,
    GET_NOW_PLAY
} from "../types/moviesTypes";

const INITIAL_STATE = {
    mostPopular: [],
    topRated: [],
    nowPlay: [],
    loading: false,
    error: ""
}

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case GET_MOST_POPULAR_MOVIES:
            return { ...state, mostPopular: action.payload, loading: false, error: "" }
            break;
        case GET_TOP_RATED:
            return { ...state, topRated: action.payload, loading: false, error: "" }
            break;
        case GET_NOW_PLAY:
            return { ...state, nowPlay: action.payload, loading: false, error: "" }
            break;
        default:
            return state
            break;
    }

}