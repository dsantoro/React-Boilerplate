import React from 'react'
import './Header.scss'

const Header = ({name}) => {
    return(
        <div className="row">

            <div className="small-12 columns">

                <h2>Hello {name}!</h2>
            </div>
        </div>
    )
}

export default Header