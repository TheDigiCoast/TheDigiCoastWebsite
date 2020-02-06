import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'



function HomeContainer() {
    return (
        <div className="item-align">
            <h3>Welcome to The DigiCoast Training Institute</h3>
            {/* <CarouselContainer /> */}
            <Link className="btn btn-primary btn-admiss" to="/admission" >Click Here to Register > </Link>
        </div>
    )
}

export default HomeContainer;