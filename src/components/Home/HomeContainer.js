import React from 'react'
import './Home.css'
import ProgramsCard from './ProgramsCard'

import compad1 from '../../Assets/compad1.jpg'
import compad2 from '../../Assets/compad2.jpg'
import { Link } from 'react-router-dom';



function HomeContainer() {
    return (
        <div className="text-center">
            <h3 className="mt-4 mb-4">Our Programs</h3>
            <div className="row">
            <div className="mb-4 col-md-4 col-lg-4 col-sm-4">
                <ProgramsCard imageUrl={compad1}/>
            </div>
            <div className="mb-4 col-md-4 col-lg-4 col-sm-4">
                <ProgramsCard imageUrl={compad2}/>
            </div>
            <div className="mb-4 col-md-4 col-lg-4 col-sm-4">
                <ProgramsCard imageUrl={compad2}/>
            </div>

            </div>
                <p className="text-center mb-5 mt-4">
                    <Link className="btn btn-danger text-center" to="/admission" >Click Here to Register ></Link>
                </p>
        </div>
    )
}

export default HomeContainer;