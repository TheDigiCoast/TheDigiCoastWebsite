import React, { Component } from 'react'

import AdsCard from './AdsCard'
import compad1 from '../../Assets/compad1.jpg';
import compad2 from '../../Assets/compad2.jpg';
import HomeContainer from './HomeContainer';

class Home extends Component {
    render() {
        return (

            <div className="row">
            <div className="col-md-4 col-lg-3 col-sm-3">
                <AdsCard imageUrl={compad1}/>
            </div>
            <div className="col-md-4 col-lg-6 col-sm-6">
                <HomeContainer />
            </div>
            <div className="col-md-4 col-lg-3 col-sm-3">
                <AdsCard imageUrl={compad2}/>
            </div>

        </div>
        )
    }
}

export default Home;