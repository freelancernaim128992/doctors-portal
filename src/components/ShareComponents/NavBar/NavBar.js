import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand logo-style" href="/">DOCTORS <span>PORTAL</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item pe-5">
                                <a className="nav-link menu-style" href="/home">Home</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link menu-style" href="/">About</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link menu-style" href="/">Dental Services</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link menu-style" href="/">Reviews</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link menu-style" href="/">Blogs</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link menu-style" href="/">Contact Us</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link menu-style" href="/dashboard">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;