import React, { PropTypes} from 'react';
import './Nav.css';

const NavBarComponent = () => {
    return (
        <div className="navbar-container">
            <ul className="nav-container-z">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Cast">Cast</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Crew">Crew</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Production">Production</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBarComponent;