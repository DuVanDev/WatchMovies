import React, { useRef, useEffect } from 'react'
import Spiner from '../atoms/Spiner'
import MovieCard from './movieCard'

export default function GroupMovies ( { movies, getMoreMovies, title, page } ) {

    const loader = useRef( null )


    useEffect( () => {

        const observe = new IntersectionObserver( handleObserver, {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        } )

        if ( loader.current ) {
            console.log( "GroupMovies -> loader.current", loader.current )
            observe.observe( loader.current )
        }
    }, [movies] )

    const handleObserver = ( entities ) => {
        if ( entities[0].isIntersecting && movies.length ) {
            getMoreMovies( page );
        }

    }


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
            <div ref={loader}>
                <Spiner />
            </div>
        </div>
    )
}
