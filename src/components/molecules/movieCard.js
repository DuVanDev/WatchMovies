import React from 'react'

function MovieCard ( { title, urlImg , date } ) {
    return (
        <div className="card">
            <figure>
                <img
                    src={`https://image.tmdb.org/t/p/original${urlImg}`}
                    alt="Smiley face"
                    style={{ width: "100%" }}
                />
            </figure>
            <div className="descriptionCard">
                <div>
                    <p className="titleCard">
                        {title}
                    </p>
                </div>
                <div>
                    {date}
                </div>
            </div>
        </div>
    )
}

export default MovieCard
