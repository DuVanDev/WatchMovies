import {
    GET_MOST_POPULAR_MOVIES,
    GET_TOP_RATED,
    GET_NOW_PLAY
} from "../types/moviesTypes";

const INITIAL_STATE = {
    mostPopular: [],
    topRated: [],
    nowPlay: { movies: [], page: 0 },
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
            return { ...state, nowPlay: { movies: state.nowPlay.movies.concat( action.payload.data ), page: action.payload.page }, loading: false, error: "" }
            break;
        default:
            return state
            break;
    }

}