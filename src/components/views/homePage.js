import React, { useState, useEffect } from 'react'
import Slider from '../organisms/slider'
import GroupMovies from '../molecules/GroupMovies'

// Import Redux
import { connect } from 'react-redux';
import * as moviesActions from '../../redux/actions/moviesActions'

function HomePage ( props ) {



    useEffect( () => {
        props.getMostPopularMovies()
        props.getTopRated()
        props.getNowPlay()

    }, [] )

    return (
        <div className="container border" >
            <Slider movies={props.mostPopular} />
            <Slider movies={props.topRated} />
            <GroupMovies movies={props.nowPlay} />
        </div>
    )
}

const mapStateToProps = ( reducers ) => {
    return reducers.moviesReducers
}

export default connect( mapStateToProps, moviesActions )( HomePage );