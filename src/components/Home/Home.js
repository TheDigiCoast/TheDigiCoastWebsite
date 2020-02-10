import React, { Component } from 'react'
import './Home.css'
import HomeContainer from './HomeContainer';
import Foot from '../Navigation/Foot';


class Home extends Component {
    render() {
        return (
            <div className="bground">
            <div className="bg-white home-upper">
            <h3 className="text-dark text-center pt-5 pr-5 mr-5">The DigiCoast Training Institute</h3>            
            </div>
            <div className="row">
                <div className="col-md-1 col-lg-1 col-sm-1">
                </div>
                <div className="col-md-10 col-lg-10 col-sm-10">
                    <HomeContainer />
                </div>
                <div className="col-md-1 col-lg-1 col-sm-1">
                </div>
            </div>

           <Foot/>
        </div>
        )
    }
}

export default Home;