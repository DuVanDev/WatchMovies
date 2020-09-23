import React from 'react'
import MovieCard from './movieCard'

export default function GroupMovies ( { movies, title } ) {
    return (
        <div className='groupMoviesSection' >
            <div>
                <h3>
                    {title}
                </h3>
            </div>
            <div className='gridMovies'>
                {
                    movies.map( ( item, i ) =>
                        <MovieCard
                            key={i}
                            id={item.id}
                            title={item.title}
                            urlImg={item.poster_path}
                            date={item.release_date}
                        />
                    )
                }
            </div>
        </div>
    )
}
