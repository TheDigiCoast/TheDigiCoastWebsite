import React from 'react'
import {Link} from 'react-router-dom'
import CarouselContainer from './CarouselContainer';



function HomeContainer() {
    return (
        <div className="">
            <h3>Welcome to The DigiCoast Training Institute</h3>
            {/* <CarouselContainer /> */}
            <Link className="btn btn-primary " to="/admission" >Click Here to Register</Link>
        </div>
    )
}

export default HomeContainer;