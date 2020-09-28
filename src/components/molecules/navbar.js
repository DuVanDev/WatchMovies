import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar () {
    return (
        <section className="section-navbar">
            <Link to="/">
                <h2>
                    watch
                <span className="gradient-text">
                        MOVIE
                </span>
                </h2>
            </Link>
        </section>
    )
}
