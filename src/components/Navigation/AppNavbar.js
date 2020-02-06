import React from 'react';
import {Link} from 'react-router-dom';

 function AppNavbar({menuItems}) {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <Link className="navbar-brand" to="#">TheDigiCoast</Link>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
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

export default AppNavbar;
