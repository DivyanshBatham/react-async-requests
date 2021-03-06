import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/home">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/axios">Axios</NavLink>
                        <NavLink className="nav-item nav-link" to="/fetch">Fetch</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;