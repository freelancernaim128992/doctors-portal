import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4">
            <div className="d-flex justify-content-center rounded">
                <img style={{height: '400px'}} src={`data: image/png;base64, ${doctor.image.img}`} alt="" />
            </div>
            <div className="me-3 text-center">
                <h5 className="text-center pt-3">{doctor.name}</h5>
                <FontAwesomeIcon className="text-secondary" icon={faPhone} /> <small className="text-secondary">{doctor.phone}</small>
            </div>
        </div>
    );
};

export default Doctor;