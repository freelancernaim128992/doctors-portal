import React from 'react';

const ServiceInfo = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '65px'}} src={service.img} alt=""/>
            <div>
                <h5 className="my-4">{service.name}</h5>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, praesentium! Voluptates aliquam enim fugit reiciendis.</p>
            </div>
        </div>
    );
};

export default ServiceInfo;