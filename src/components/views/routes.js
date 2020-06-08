import React from 'react'

// Import component library
import {
    Switch,
    Route
} from 'react-router-dom'

// Import views
import HomePage from './homePage'
import Navbar from '../molecules/navbar'

export default function Routes () {
    return (
        <Switch>
            {/* <Navbar/> */}
            <Route exact path='/' component={(...props) => <HomePage props={props} />} />
        </Switch>
    )
}
