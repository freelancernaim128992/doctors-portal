import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed  = [
        {name: 'Emergency Dental Care'},
        {name: 'Check Up'},
        {name: 'Treatment of personal Diseases'},
        {name: 'Tooth Extraction'},
        {name: 'Check Up'}
    ]
    const ourAddress = [
        {name: 'New York - 101010 Hudson '},
        {name: 'Yards'}
    ]
    const oralHealth = [
        {name: 'Emergency Dental Care'},
        {name: 'Check Up'},
        {name: 'Treatment of personal Diseases'},
        {name: 'Tooth Extraction'},
        {name: 'Check Up'},
        {name: 'Check Up'},
        {name: 'Check Up'}
    ]
    const services = [
        {name: 'Emergency Dental Care'},
        {name: 'Check Up'},
        {name: 'Treatment of personal Diseases'},
        {name: 'Tooth Extraction'},
        {name: 'Check Up'},
        {name: 'Check Up'},
        {name: 'Check Up'}
    ]

    return (
        <footer className="d-flex justify-content-center mt-5 pt-5">
            <div className="w-75 rounded row footer-container">
                <FooterCol title={""} menuInfo={noNamed}></FooterCol>
                <FooterCol title={"Services"} menuInfo={services}></FooterCol>
                <FooterCol title={"Oral Health"} menuInfo={oralHealth}></FooterCol>
                <FooterCol title={"Our Address"} menuInfo={ourAddress}>
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn buttonStyle">+2025550295</button>
                    </div>
                </FooterCol>
                <div className="text-center text-secondary">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;