import React, { useEffect } from 'react';
import Doctor from '../Doctor/Doctor';
import { useState } from 'react/cjs/react.development';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:4000/doctors';
        fetch(url)
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="pb-5">
            <div className="text-center">
                <h5 className="mt-5 fw-bold text-center textStyle">OUR DOCTORS</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    {
                        doctors.map(info => <Doctor doctor={info}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;