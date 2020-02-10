import React from 'react'
import { Link } from 'react-router-dom'

export default function Foot() {
    return (
        <div>
             <div className="container-fluid bg-info text-white home-lower">
                <p className="text-center">
                <span><Link className="text-white" to="/">Home</Link></span> | &nbsp; 
                <span><Link className="text-white" to="/about">About Us</Link></span> | &nbsp;
                <span><Link className="text-white" to="/admission">Admission</Link></span>
                <br/>
                    <small>
                    Alrights Reserved. &copy; copyrights The DigiCoast Training Institute, {new Date().getFullYear()}
                    </small>
                </p>
            </div>
        </div>
    )
}
