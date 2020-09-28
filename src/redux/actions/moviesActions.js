
import { GET_MOST_POPULAR_MOVIES, GET_TOP_RATED, GET_NOW_PLAY, ERROR_GET, CHANGE_STATE, API } from '../types/moviesTypes'
import { ERROR, GET_DETAIL_DATA_MOVIE, GET_USER_ID, CHANGE_STATE_DETAIL_MOVIES } from '../types/detailMoviesTypes'


const API_KEY = "60889b7651155b4154c658214027b4e2"

const mostPopularSuccess = ( page ) => ( response ) => { return { type: GET_MOST_POPULAR_MOVIES, payload: { data: response.results, page: page } } }

export const getMostPopularMovies = ( page ) => {
    let numberPage = page + 1
    return apiAction( {
        url: "https://api.themoviedb.org/3/movie/popular",
        data: {
            api_key: API_KEY,
            language: "en",
            page: numberPage
        },
        onSuccess: mostPopularSuccess( numberPage ),
        onFailure: () => console.log( "Error Papu" ),
    } )
}

const topRatedSuccess = ( page ) => ( response ) => { return { type: GET_TOP_RATED, payload: { data: response.results, page: page } } }

export const getTopRated = ( page ) => {
    let numberPage = page + 1
    return apiAction( {
        url: "https://api.themoviedb.org/3/movie/top_rated",
        data: {
            api_key: API_KEY,
            language: "en",
            page: numberPage
        },
        onSuccess: topRatedSuccess( numberPage ),
        onFailure: () => console.log( "Error Papu" ),
    } )
}

const nowPlaySuccess = ( page ) => ( response ) => { return { type: GET_NOW_PLAY, payload: { data: response.results, page: page } } }

export const getNowPlay = () => {

    return ( dispathc, getState ) => {

        console.log( "getNowPlay -> getState()", getState() )

        dispathc(
            apiAction( {
                url: "https://api.themoviedb.org/3/movie/now_playing",
                data: {
                    api_key: API_KEY,
                    language: "en",
                    page: getState().moviesReducers.nowPlay.page + 1
                },
                onSuccess: nowPlaySuccess( getState().moviesReducers.nowPlay.page + 1 ),
                onFailure: () => console.log( "Error Papu" )
            } )
        )

    }
}

const dataMovieSuccess = ( response ) => {
    return { type: GET_DETAIL_DATA_MOVIE, payload: response }
}

export const getDataMovie = ( id ) => {
    return apiAction( {
        url: `https://api.themoviedb.org/3/movie/${id}`,
        data: {
            api_key: API_KEY,
            language: "en-US"
        },
        onSuccess: dataMovieSuccess,
        onFailure: () => console.log( "Error Papu" )
    } )
}

const getUserId = ( response ) => {
    console.log( "getUserId -> response", response )
    return { type: GET_USER_ID, payload: response }
}

export const getAuthGuestSession = () => {

    return apiAction( {
        url: "https://api.themoviedb.org/3/authentication/guest_session/new",
        data: {
            api_key: API_KEY
        },
        onSuccess: getUserId,
        onFailure: () => { console.log( "BADDD API" ) }
    } )
}




export const setRateMovie = ( id, value, userId ) => {

    const loading = () => { return { type: CHANGE_STATE_DETAIL_MOVIES, payload: { stateRateMovie: { state: "loading", error: null } } } }
    const error = ( error ) => { return { type: CHANGE_STATE_DETAIL_MOVIES, payload: { stateRateMovie: { state: "error", error: error } } } }
    const success = () => { return { type: CHANGE_STATE_DETAIL_MOVIES, payload: { stateRateMovie: { state: "success", error: null } } } }
    const final = () => { return { type: CHANGE_STATE_DETAIL_MOVIES, payload: { stateRateMovie: { state: "idle", error: null } } } }

    return apiAction( {
        url: `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${userId}`,
        method: "POST",
        data: {
            value: value
        },
        onLoading: loading,
        onSuccess: success,
        onFailure: error,
        final: final
    } )
}

export const rateMovie = ( id, value ) => {
    return ( dispatch, getState ) => {
        dispatch( getAuthGuestSession() )
            .then( () => {
                dispatch( setRateMovie( id, value, getState().detailMovieReducer.guest_session_id ) )
            } )
    }
}



const apiAction = ( {
    url = "",
    method = "GET",
    data = null,
    onLoading = () => { },
    onSuccess = () => { },
    onFailure = () => { },
    final = () => { },
    label = ""
} ) => {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            onLoading,
            onSuccess,
            onFailure,
            final,
            label
        }
    }
}





