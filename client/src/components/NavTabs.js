import React from 'react';
import { Link } from 'react-router-dom';

// NavBar 
const NavTabs = () => (
    
    <nav class="blue-grey darken-4">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Google Books Search</a>
        <ul className ='nav'>
            <li className = 'nav-item'>
                <Link
                    to = '/'
                    className = {
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    } >Search
                    </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/Saved"
                className={
                window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"
                }
            >
                Saved
            </Link>
            </li>
        </ul>
      </div>
    </nav>
    
);

export default NavTabs;