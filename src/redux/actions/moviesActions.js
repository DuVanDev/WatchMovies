
import { GET_MOST_POPULAR_MOVIES, GET_TOP_RATED, GET_NOW_PLAY } from '../types/moviesTypes'
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

export const getNowPlay = () => async ( dispatch ) => {
    try {
        let response = await axios.get( 'https://api.themoviedb.org/3/movie/now_playing?api_key=60889b7651155b4154c658214027b4e2&language=en-US&page=1' )
        dispatch( {
            type: GET_NOW_PLAY,
            payload: response.data.results
        } )
    } catch ( error ) {
        console.log( `The error is ${error.message}` );
    }
}

