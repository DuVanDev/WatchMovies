import React from 'react'
import MovieCard from './movieCard'

export default function GroupMovies ( { movies } ) {
    return (
        <div>
            Grup Movies
            {
                movies.map( item =>
                    <MovieCard title={item.title} />
                )
            }
        </div>
    )
}
