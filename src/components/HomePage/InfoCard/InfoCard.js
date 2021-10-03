import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center rounded info-${info.background} info-container`}>
                <div className="info-icon me-3">
                    <FontAwesomeIcon icon={info.icon} />
                </div>
                <div>
                    <h5>{info.title}</h5>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;