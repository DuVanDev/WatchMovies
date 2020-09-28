import React, { useRef, useEffect } from 'react'
import Spiner from '../atoms/Spiner'
import MovieCard from './movieCard'

export default function GroupMovies ( { movies, getMoreMovies, title, page } ) {

    const loader = useRef( null )


    useEffect( () => {

        const observe = new IntersectionObserver( handleObserver, {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        } )

        console.log( "GroupMovies -> movies", movies )
        if ( loader.current ) {
            observe.observe( loader.current )
            console.log( "GroupMovies -> loader.current", loader.current )
        }
    }, [] )

    const handleObserver = ( entities ) => {
        if ( entities[0].isIntersecting ) {
            console.log( "Page is " );
            getMoreMovies();
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
