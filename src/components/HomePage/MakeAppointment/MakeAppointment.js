import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="d-flex justify-content-center mt-5 pt-5">
            <div className="row w-75 appointment-container rounded">
                <div className="col-md-6">
                    <img style={{transform: 'translateY(-142px)'}} src={doctor} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 mt-5">
                    <h5 className="fw-bold mb-3 textStyle">APPOINTMENT</h5>
                    <h1 className="text-white mb-3 lh-base" style={{fontSize: '45px'}}>Make an appointment <br/> Today</h1>
                    <p className="text-white lh-lg" style={{fontSize: '19px'}}>It is a long established fact that a render will be distracted by the readable content of a page when looking at its</p>
                    <button className="btn buttonStyle mt-4">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;