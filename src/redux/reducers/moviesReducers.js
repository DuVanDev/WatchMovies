import {
    GET_MOST_POPULAR_MOVIES,
    GET_TOP_RATED,
    GET_NOW_PLAY,
    CHANGE_STATE,
    ERROR_GET
} from "../types/moviesTypes";

const INITIAL_STATE = {
    mostPopular: { movies: [], page: 0, state: 'idle', error: null },
    topRated: { movies: [], page: 0, state: 'idle', error: null },
    nowPlay: { movies: [], page: 0, state: 'idle', error: null },
    loading: false,
    error: ""
}

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case GET_MOST_POPULAR_MOVIES:
            return { ...state, mostPopular: { movies: state.mostPopular.movies.concat( action.payload.data ), page: action.payload.page, state: 'idle', error: null } }
            break;
        case GET_TOP_RATED:
            return { ...state, topRated: { movies: state.topRated.movies.concat( action.payload.data ), page: action.payload.page, state: 'idle', error: null } }
            break;
        case GET_NOW_PLAY:
            return { ...state, nowPlay: { movies: state.nowPlay.movies.concat( action.payload.data ), page: action.payload.page, state: 'idle', error: null } }
            break;
        case CHANGE_STATE:
            return { ...state, ...action.payload }
            break;
        case ERROR_GET:
            return { ...state, ...action.payload }
            break;
        default:
            return state
            break;
    }

}