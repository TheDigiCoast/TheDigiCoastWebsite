import React from 'react'
import './Home.css'
import { NoviceCard, IntermediateCard, AdvancedCard } from './ProgramsCard'

import { Link } from 'react-router-dom';



function HomeContainer() {
    return (
        <div className="text-center">
            <h3 className="mt-4 mb-5">Our Programs</h3>
            <hr/>
            <div className="row">
            <div className="mb-4 col-md-2 col-lg-4 col-sm-4" >                
                <NoviceCard/>
            </div>
            <div className="mb-4 col-md-4 col-lg-4 col-sm-4">
                <IntermediateCard/>
            </div>
            <div className="mb-4 col-md- col-lg-4 col-sm-4">
                <AdvancedCard/>
            </div>

            </div>
                <p className="text-center mb-5 mt-5">
                    <Link className="btn btn-danger text-center" to="/admission" >Click Here to Register ></Link>
                </p>
        </div>
    )
}

export default HomeContainer;