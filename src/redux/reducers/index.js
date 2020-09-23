import { combineReducers } from 'redux'
import moviesReducers from './moviesReducers'
import detailMovieReducer from './detailMovieReducer'

export default combineReducers(
    {
        moviesReducers,
        detailMovieReducer
    }
)