import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Foot() {
    return (
        <div>
             <div className="container-fluid bg-info text-white home-lower">
                <p className="text-center">
                <span><Link className="text-white link-style" to="/">Home</Link></span> | &nbsp; 
                <span><Link className="text-white link-style" to="/about">About Us</Link></span> | &nbsp;
                <span><Link className="text-white link-style" to="/admission">Admission</Link></span>
                <br/>
                <span>Follow Us on
                 <a className="text-white link-style" target="blank" href="https://www.facebook.com/thedigicoast/">
                    <span className="glyphicon glyphicon-facebook"></span>  Facebook </a>
                </span>
                <br/>
                <small>
                    Alrights Reserved. &copy; copyrights The DigiCoast Training Institute, {new Date().getFullYear()}
                </small>
                </p>
            </div>
        </div>
    )
}
