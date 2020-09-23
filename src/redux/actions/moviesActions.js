
import { GET_MOST_POPULAR_MOVIES, GET_TOP_RATED, GET_NOW_PLAY } from '../types/moviesTypes'
import { ERROR, GET_DETAIL_DATA_MOVIE, IDLE, LOADING, SUCCESS, GET_USER_ID } from '../types/detailMoviesTypes'

import axios from 'axios'

export const getMostPopularMovies = () => async ( dispatch ) => {

    try {
        let response = await axios.get( 'https://api.themoviedb.org/3/movie/popular?api_key=60889b7651155b4154c658214027b4e2&language=en-US&page=1' )
        dispatch( {
            type: GET_MOST_POPULAR_MOVIES,
            payload: response.data.results
        } )
    } catch ( error ) {
        console.log( `THe erro is ${error.message}` );
    }
}

export const getTopRated = () => async ( dispatch ) => {
    try {
        let response = await axios.get( 'https://api.themoviedb.org/3/movie/top_rated?api_key=60889b7651155b4154c658214027b4e2&language=en-US&page=1' )
        dispatch( {
            type: GET_TOP_RATED,
            payload: response.data.results
        } )
    } catch ( error ) {
        console.log( `The error is ${error.message}` );
    }
}

export const getNowPlay = (page) => async ( dispatch , getState ) => {
    try {
        let response = await axios.get( `https://api.themoviedb.org/3/movie/now_playing?api_key=60889b7651155b4154c658214027b4e2&language=en-US&page=${page + 1}` )
        dispatch( {
            type: GET_NOW_PLAY,
            payload: { data: response.data.results , page : page + 1 }
        } )
    } catch ( error ) {
        console.log( `The error is ${error.message}` );
    }
}

export const getDataMovie = ( id ) => ( dispatch ) => {

    axios.get( `https://api.themoviedb.org/3/movie/${id}?api_key=60889b7651155b4154c658214027b4e2&language=en-US` )
        .then(
            response =>
                dispatch(
                    {
                        type: GET_DETAIL_DATA_MOVIE,
                        payload: response.data
                    }
                )
        ).catch( error => console.log( `The error is ${error.message}` ) )
}

export const getAuthGuestSession = () => ( dispatch ) => {
    axios.get( `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=60889b7651155b4154c658214027b4e2` )
        .then(
            response => dispatch( { type: GET_USER_ID, payload: response.data } )
        )
}

export const postAxios = ( id ,  value ,guest_session_id ) => ( dispatch ) => {

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

