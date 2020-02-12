import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/icons/logo.jpg'
import './Nav.css'


 function AppNavbar({menuItems}) {
    return (
            <nav className="navbar navbar-expand-sm navbar-dark text-dark bg-info fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <Link className="navbar-brand" to="#">The DigiCoast</Link>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                <Link className="navbar-brand" to="/">
                        <img src={logo} className="nav-img" alt="logo"/>
                </Link>
                <div className="spacer"></div>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">                                  
                        {menuItems.map(({id,label,route}) =>(
                            <li key={id} className="nav-item">
                                <Link to={route} className="nav-link">
                                    {label}
                                </Link>  
                            </li>        
                    ))}                   

                    </ul>
                </div>
            </nav>
    )
}

export function Toolbar(){
    return (
        <header>
            <nav>

            </nav>
        </header>
     )
}
export default AppNavbar;
