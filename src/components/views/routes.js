import React from 'react'

// Import component library
import {
    Switch,
    Route
} from 'react-router-dom'
import DetailMovie from './DetailMovie'

// Import views
import HomePage from './homePage'

export default function Routes () {
    return (
        <Switch>
            <Route exact path='/' component={(...props) => <HomePage props={props} />} />
            <Route path='/movie/:id' component={(...props) => <DetailMovie props={props}/> } />
        </Switch>
    )
}
