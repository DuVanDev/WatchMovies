import React from 'react'

// Import components
import MovieCard from '../molecules/movieCard'

function Slider ( { movies } ) {
    return (
        <div className='sliderSection'>
            <h3>
                Title
            </h3>
            <div className='banerCards'>
                {
                    movies.map(
                        (item , i) =>
                            
                            <MovieCard title={item.original_title} />
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
