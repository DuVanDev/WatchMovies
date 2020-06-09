import React from 'react'
import MovieCard from './movieCard'

export default function GroupMovies ( { movies } ) {
    return (
        <div className='groupMoviesSection' >
            <div>
                Grup Movies
            </div>
            <div className='gridMovies'>
                {
                    movies.map( item =>
                        <MovieCard title={item.title} />
                    )
                }
            </div>
        </div>
    )
}
