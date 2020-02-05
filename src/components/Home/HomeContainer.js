import React from 'react'
import AdsCard from './AdsCard'
import compad1 from '../../Assets/compad1.jpg';
import compad2 from '../../Assets/compad2.jpg';


function HomeContainer() {
    return (
        <div className="row">
            <h3>Welcome to The DigiCoast Training Institute</h3>
            <div className="col-md-4 col-lg-3">
                <AdsCard imageUrl={compad1}/>
            </div>
            <div className="col-md-4 col-lg-6"></div>
            <div className="col-md-4 col-lg-3">
                <AdsCard imageUrl={compad2}/>
            </div>

        </div>
    )
}

export default HomeContainer;