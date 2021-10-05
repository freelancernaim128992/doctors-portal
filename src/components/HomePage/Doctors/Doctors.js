import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const url = 'https://whispering-garden-78687.herokuapp.com/doctors'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
            setSpinner(true)
        })
    }, [])
    return (
        <section className="pb-5">
            <div className="text-center">
                <h5 className="mt-5 fw-bold text-center textStyle">OUR DOCTORS</h5>
            </div>
            <div className="d-flex justify-content-center">
                {
                    spinner ? 
                        <div className="row w-75 mt-5">
                            {
                                doctors.map(info => <Doctor key={info._id} doctor={info}></Doctor>)
                            }
                        </div>
                    :
                        <div className="d-flex justify-content-center">
                            <div id="spinner" className="spinner-border text-primary text-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default Doctors;