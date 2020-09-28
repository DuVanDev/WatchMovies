import React, { useEffect, useState } from 'react'

/* Import Externals Components */
import { useParams } from 'react-router-dom';

/* Import Redux */
import { connect } from 'react-redux'
import { getDataMovie, setRateMovie, getAuthGuestSession, rateMovie } from '../../redux/actions/moviesActions'
import StarRating from '../molecules/StarRating';

import Spiner from '../atoms/Spiner'


function DetailMovie ( { getDataMovie, stateRateMovie, rateMovie, title, overview, genres, runtime, vote_average, release_date, poster_path, backdrop_path, state, guest_session_id } ) {

    const { id } = useParams()
    const [valueRate, setValueRate] = useState( null )


    useEffect( () => {
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
            <section className="section-ratemovie" >
                <h3>
                    Rating Movie
                </h3>
                <StarRating value={valueRate} setValueRate={setValueRate} />
                {
                    stateRateMovie.state == "loading" ?
                        <Spiner />
                        :
                        <button
                            disabled={valueRate ? false : true}
                            onClick={() => rateMovie( id, valueRate )}
                            className="rate-movie-btn"
                        >
                            Rate Movie
                        </button>
                }
            </section>
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
    setRateMovie,
    getDataMovie,
    getAuthGuestSession,
    rateMovie
}


export default connect( mapStateToProps, mapDispatchToProps )( DetailMovie )
