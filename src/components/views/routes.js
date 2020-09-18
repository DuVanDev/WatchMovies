import React from 'react'

// Import component library
import {
    Switch,
    Route
} from 'react-router-dom'

// Import views
import HomePage from './homePage'

export default function Routes () {
    return (
        <Switch>
            <Route exact path='/' component={(...props) => <HomePage props={props} />} />
        </Switch>
    )
}
