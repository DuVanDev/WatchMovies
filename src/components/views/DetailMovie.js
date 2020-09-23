import React, { useEffect, useState } from 'react'

/* Import Externals Components */
import { useParams } from 'react-router-dom';

/* Import Redux */
import { connect } from 'react-redux'
import { getDataMovie, postAxios, getAuthGuestSession } from '../../redux/actions/moviesActions'
import StarRating from '../molecules/StarRating';


function DetailMovie ( { getDataMovie, postAxios, getAuthGuestSession, title, overview, genres, runtime, vote_average, release_date, poster_path, backdrop_path, state, guest_session_id } ) {

    const { id } = useParams()

    useEffect( () => {
        getAuthGuestSession()
        getDataMovie( id )
    }, [id] )

    useEffect( () => {
        console.log( "DetailMovie -> state", state )
    }, [state] )

    return (
        <div className="detail-movie-section" >
            <div className="backdrop-movie" style={{
                "background-image": `url(https://image.tmdb.org/t/p/original${backdrop_path})`
            }}>
                <section className="section-detail-movie" >
                    <figure>
                        <img
                            src={`https://image.tmdb.org/t/p/original${poster_path}`}
                            style={{ width: "100%" }}
                        />
                    </figure>
                    <div>
                        <h3>
                            {title}
                        </h3>
                        {release_date}
                        <p>
                            <span>
                                {
                                    genres.length > 0 &&
                                    genres.map( ( item ) => (
                                        `${item.name},`
                                    ) )
                                }
                            </span>
                        -
                        <span>
                                {runtime}
                            </span>
                        </p>
                        <p>
                            {vote_average}
                        </p>
                        <article>
                            <h5>
                                Overview
                        </h5>
                            <p>
                                {overview}
                            </p>
                        </article>
                    </div>
                </section>
            </div>
            <button onClick={() => postAxios( id, 2, guest_session_id )} >
                Post Active
            </button>
            <div>
                <h4>
                    Rating Movie
                </h4>
                <StarRating/>
            </div>
        </div>
    )
}

DetailMovie.defaultProps = {
    genres: []
}

const mapStateToProps = ( { detailMovieReducer } ) => {
    return detailMovieReducer
}

const mapDispatchToProps = {
    postAxios,
    getDataMovie,
    getAuthGuestSession
}


export default connect( mapStateToProps, mapDispatchToProps )( DetailMovie )
