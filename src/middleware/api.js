
import axios from 'axios'

import { API } from '../redux/types/moviesTypes'

const apiMiddleware = ( { dispatch } ) => next => action => {

    if ( !action ) return;

    next( action )

    if ( action.type !== API ) return;


    const {
        url,
        method,
        data,
        // accessToken,
        onLoading,
        onSuccess,
        onFailure,
        final,
        label,
        headers
    } = action.payload

    const dataOrParams = ["GET", "DELETE"].includes( method ) ? "params" : "data";

    /* Axios Defauld Config */
    axios.defaults.baseUrl = "https://api.themoviedb.org/3" | ""
    axios.defaults.headers.common["Content-Type"] = "application/json"


    // if ( label ) {
    //     console.log( 'Existe Label' )
    // }

    dispatch(onLoading())

    return axios.request( {
        bareURL: "https://api.themoviedb.org/3",
        url,
        method,
        headers,
        [dataOrParams]: data
    } ).then(
        response => {
            console.log( "response", response.data )
            dispatch( onSuccess( response.data ) )
        }
    ).catch(
        error => {
            dispatch( onFailure( error ) )
        } )
        .finally(
            dispatch(final())
        )


}

export default apiMiddleware