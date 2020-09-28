import React, { useState, useEffect } from 'react'
import Slider from '../organisms/slider'
import GroupMovies from '../molecules/GroupMovies'

// Import Redux
import { connect } from 'react-redux';
import * as moviesActions from '../../redux/actions/moviesActions'

function HomePage ( props ) {



    useEffect( () => {
        props.getMostPopularMovies( props.mostPopular.movies )
        props.getTopRated( props.topRated.page )
        // props.getNowPlay( props.nowPlay.page )

    }, [] )

    return (
        <div className="container border" >
            <Slider
                title="Most popular"
                movies={props.mostPopular.movies}
            />
            <Slider
                title="Top rated"
                movies={props.topRated.movies}
            />
            <GroupMovies
                title="Trending"
                movies={props.nowPlay.movies}
                getMoreMovies={props.getNowPlay}
                page={props.nowPlay.page}
            />
        </div>
    )
}

const mapStateToProps = ( reducers ) => {
    return reducers.moviesReducers
}

export default connect( mapStateToProps, moviesActions )( HomePage );