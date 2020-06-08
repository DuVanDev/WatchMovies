import React from 'react'

// Import components
import MovieCard from '../molecules/movieCard'

function Slider ({movies}) {
    return (
        <div>
            Slider Is THis
            {
                movies.map(
                    item => 
                    <MovieCard title={item.original_title} />
                )
            }
        </div>
    )
}

export default Slider
