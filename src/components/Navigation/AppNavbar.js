import React from 'react';
import {Link} from 'react-router-dom';

 function AppNavbar({menuItems}) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark fixed-top">
                {/* <a class="navbar-brand" href="#">
                    <img src="" alt="Logo" style="width:40px;" />
                </a> */}
                <ul className="navbar-nav">
                    {menuItems.map(({id,label,route}) =>(
                        <li key={id} className="nav-item">
                            <Link to={route} className="nav-link">
                                {label}
                            </Link>  
                        </li>        
                ))}                   
                </ul>

            </nav>
        </div>
    )
}

export default AppNavbar;
