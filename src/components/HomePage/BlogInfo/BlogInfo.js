import React from 'react';
import './BlogInfo.css'

const BlogInfo = ({ info }) => {
    return (
        <div className={`col-md-4 card-container ${info.background}Style`}>
            <div className="d-flex justify-content-center rounded">
                <img className="img-style m-3" src={info.img} alt=""/>
                <div>
                    <h5>{info.name}</h5>
                    <p>{info.date}</p>
                </div>
            </div>
            <div className="me-3 text-center">
                <h5>{info.title}</h5>
                <p>{info.description}</p>
            </div>
            
        </div>
    );
};

export default BlogInfo;