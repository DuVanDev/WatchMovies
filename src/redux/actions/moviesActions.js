
import { GET_MOST_POPULAR_MOVIES, GET_TOP_RATED, GET_NOW_PLAY, ERROR_GET, CHANGE_STATE, API } from '../types/moviesTypes'
import { ERROR, GET_DETAIL_DATA_MOVIE, IDLE, LOADING, SUCCESS, GET_USER_ID } from '../types/detailMoviesTypes'

import axios from 'axios'

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

export const getNowPlay = ( page ) => {
    let numberPage = page + 1
    return apiAction( {
        url: "https://api.themoviedb.org/3/movie/now_playing",
        data: {
            api_key: API_KEY,
            language: "en",
            page: numberPage
        },
        onSuccess: nowPlaySuccess( numberPage ),
        onFailure: () => console.log( "Error Papu" )
    } )
}

const dataMovieSuccess = ( response ) => {
    console.log( "dataMovieSuccess -> response", response )
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
    // axios.get( `https://api.themoviedb.org/3/movie/${id}?api_key=60889b7651155b4154c658214027b4e2&language=en-US` )
    //     .then(
    //         response =>
    //             dispatch(
    //                 {
    //                     type: GET_DETAIL_DATA_MOVIE,
    //                     payload: response.data
    //                 }
    //             )
    //     ).catch( error => console.log( `The error is ${error.message}` ) )
}

export const getAuthGuestSession = () => ( dispatch ) => {
    axios.get( `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=60889b7651155b4154c658214027b4e2` )
        .then(
            response => dispatch( { type: GET_USER_ID, payload: response.data } )
        )
}

export const postAxios = ( id, value, guest_session_id ) => ( dispatch ) => {

    dispatch( {
        type: LOADING,
        payload: ""
    } )
    let object = { value: value }
    axios.post( `https://api.themoviedb.org/3/movie/${id}/rating?api_key=60889b7651155b4154c658214027b4e2&guest_session_id=${guest_session_id}`, object )
        .then(
            response =>
                dispatch( { type: SUCCESS, payload: response.data } )
        )
        .catch( error =>
            dispatch( {
                type: ERROR,
                payload: error
            } )
        )
}

const apiAction = ( {
    url = "",
    method = "GET",
    data = null,
    onSuccess = () => { },
    onFailure = () => { },
    label = ""
} ) => {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            onSuccess,
            onFailure,
            label
        }
    }
}





