import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/teeth.png';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Services = () => {
    const serviceInfo = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            img: teeth
        }
    ]
    return (
        <section className="pb-5">
            <div className="text-center">
                <h5 className="mt-5 fw-bold textStyle">OUR SERVICES</h5>
                <h1 className="my-5">Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    {
                        serviceInfo.map(service => <ServiceInfo service={service} key={service.id}></ServiceInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;