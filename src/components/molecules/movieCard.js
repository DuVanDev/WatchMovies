import React from 'react'

import { Link } from 'react-router-dom'

function MovieCard ( { title, urlImg, date, id } ) {
    return (
        <Link to={`/movie/${id}`} >
            <div className="card">
                <figure>
                    <img
                        src={`https://image.tmdb.org/t/p/original${urlImg}`}
                        alt="Smiley face"
                        style={{ width: "100%" }}
                    />
                </figure>
                <div className="descriptionCard">
                    <p className="titleCard">
                        {title}
                    </p>
                    <p>
                        {date}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
