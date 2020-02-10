import React, { Component } from 'react'
import AdmissionForm from './AdmissionForm'
import Foot from '../Navigation/Foot';

class Admission extends Component {
    render() {
        return (
            <div>
            <h3 className="text-center mt-3 mb-4">Register Now and get 10% discount</h3>
                <AdmissionForm />
                <br/><br/><br/><br/><br/>
                <hr/>
                <Foot/>
            </div>
            
        )
    }
}

export default Admission;