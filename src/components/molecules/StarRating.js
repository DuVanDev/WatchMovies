import React, { useState } from 'react'

import { ReactComponent as Icon } from '../../icons/star.svg'

function StarRating () {
    const [ratinValue, setRatinValue] = useState( null )
    return (
        <div>
            {
                [...Array( 5 )].map(
                    ( star, i ) => {
                        let value = ( i + 1 ) * 2

                        return <label>
                            <input
                                type="radio"
                                name="rating"
                                value={value}
                                onClick={() => setRatinValue( value )}
                            />
                            <Icon />
                        </label>
                    }
                )
            }
        </div>


    )
}

export default StarRating
