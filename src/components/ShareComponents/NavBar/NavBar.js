import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import image from '../../../images/cavity.png'
import './NavBar.css'

const NavBar = () => {
    const [user, setUser] = useContext(UserContext);
    const { email, photo } = user;
    const handleImg = () => {
        const showDiv = document.getElementById('profile')
        showDiv.classList.toggle('active');
    }
    let profilePhoto;
    if (photo === undefined) {
        profilePhoto = sessionStorage.getItem('photo')
    } else if (photo !== undefined) {
        profilePhoto = photo;
    }

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
                        </ul>
                        {
                            email || sessionStorage.getItem('email') ?
                                <div className="position-relative">
                                    <img onClick={handleImg} className="profileImg" src={profilePhoto} alt="" />
                                    <div className="profile" id="profile">
                                        <ul>
                                            <li>
                                                <a href="/dashboard/appointment">Your Profile</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <Link to="/login"><button className="btn buttonStyle">LogIn</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;