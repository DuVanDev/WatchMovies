import React from 'react'

function MovieCard ( { title, urlImg } ) {
    return (
        <div className="card">
            <img
                src={`https://image.tmdb.org/t/p/original${urlImg}`}
                alt="Smiley face"
                style={{ width: "100%" }}
            />
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
