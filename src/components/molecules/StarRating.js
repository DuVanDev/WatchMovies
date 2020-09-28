import React, { useState } from 'react'

import { ReactComponent as Icon } from '../../icons/star.svg'

function StarRating ( { value ,setValueRate } ) {

    return (
        <div>
            {
                [...Array( 5 )].map(
                    ( star, i ) => {
                        let indexValue = ( i + 1 ) * 2

                        return <label>
                            <input
                                type="radio"
                                name="rating"
                                value={indexValue}
                                onClick={() => setValueRate( indexValue )}
                            />
                            <Icon className={`star ${ indexValue <= value && 'yellow' }`}  />
                        </label>
                    }
                )
            }
        </div>


    )
}

export default StarRating
