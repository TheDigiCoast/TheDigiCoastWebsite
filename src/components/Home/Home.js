import React, { Component } from 'react'
import './Home.css'
import HomeContainer from './HomeContainer';


class Home extends Component {
    render() {
        return (
            <div className="bground">
            <div className="bg-white home-upper">
            <h3 className="text-dark text-center pt-5">The DigiCoast Training Institute</h3>            
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

            <div className="container-fluid bg-dark text-white home-lower">
                <p className="text-center"> 
                    <strong>
                    Alright Reserved. &copy; copyrights The DigiCoast Training Institute, {new Date().getFullYear()}
                    </strong>
                </p>
            </div>
        </div>
        )
    }
}

export default Home;