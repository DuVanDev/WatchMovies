import React from 'react'

function MainPage ( props ) {
    return (
        <React.Fragment>
            <header>
                {props.header}
            </header>
            <section>
                {props.content}
            </section>
        </React.Fragment>
    )
}

export default MainPage
