import React from 'react';
import './Testimonial.css'

const Testimonial = ({ info }) => {
    return (
        <div className="col-md-4 card-container">
            <div className="me-3 text-center">
                <p>{info.description}</p>
            </div>
            <div className="d-flex justify-content-center rounded">
                <img className="img-style m-3" src={info.img} alt=""/>
                <div>
                    <h5 style={{color: '#1CC7C1'}}>{info.name}</h5>
                    <p>{info.city}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;