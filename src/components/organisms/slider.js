import React from 'react'

// Import components
import MovieCard from '../molecules/movieCard'

function Slider ( { movies, title } ) {
    return (
        <div className='sliderSection'>
            <h3>
                {title}
            </h3>
            <div className='banerCards'>
                {
                    movies.map(
                        ( item, i ) =>

                            <MovieCard
                                key={i}
                                title={item.original_title}
                                urlImg={item.poster_path}
                            />
                    )
                }
            </div>
            <div>
                see More
            </div>
        </div>
    )
}

export default Slider
