import React from 'react'

function MovieCard ( { title } ) {
    return (
        <div className="card">
            <figure>

            </figure>
            <div className="descriptionCard">
                <div>
                    {title}
                    puntaje
                </div>
                <div>
                    information movie
                </div>
            </div>
        </div>
    )
}

export default MovieCard
