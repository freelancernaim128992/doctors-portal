import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, Ny 10036, United States',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Contact Us Now',
            description: '+000 123 456736',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;