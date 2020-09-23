import React from 'react'
import { Link } from 'react-router-dom'

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
                                id={item.id}
                                title={item.title}
                                urlImg={item.poster_path}
                                date={item.release_date}
                            />
                    )
                }
            </div>
            <Link to={"#"} type="button" className="see-more-btn">
                See More
            </Link>
        </div>
    )
}

export default Slider
