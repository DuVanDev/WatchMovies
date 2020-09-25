
import axios from 'axios'

import { API } from '../redux/types/moviesTypes'

const apiMiddleware = ( { dispatch } ) => next => action => {

    if ( !action ) return;

    next( action )
    console.log("action", action)

    if ( action.type !== API ) return;


    const {
        url,
        method,
        data,
        // accessToken,
        onSuccess,
        onFailure,
        label,
        headers
    } = action.payload

    const dataOrParams = ["GET", "DELETE"].includes( method ) ? "params" : "data";

    /* Axios Defauld Config */
    axios.defaults.baseUrl = "https://api.themoviedb.org/3" | ""
    axios.defaults.headers.common["Content-Type"] = "application/json"


    if ( label ) {
        console.log( 'Existe Label' )
    }


    axios.request( {
        bareURL: "https://api.themoviedb.org/3",
        url,
        method,
        headers,
        [dataOrParams]: data
    } ).then(
        response => {
            // console.log( "response", response )
            dispatch( onSuccess( response.data ) )
        }
    ).catch(
        error => {
            dispatch( onFailure( error ) )
        } )


}

export default apiMiddleware