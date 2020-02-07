import React, { Component } from 'react'
import AdmissionForm from './AdmissionForm'

class Admission extends Component {
    render() {
        return (
            <div>
            <h3 className="text-center mt-3 mb-4">Register Now and get 10% discount</h3>
                <AdmissionForm />
            </div>
        )
    }
}

export default Admission;