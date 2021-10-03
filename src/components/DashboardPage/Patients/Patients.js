import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Patients.css';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:4000/appointments';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const patient = data.slice(0,11)
            setPatients(patient)})
    }, [])
    return (
        <section className="patient-section">
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h3 className="main-header">Patients</h3>
                    <div className="table-container">
                        <h3>All Patients</h3>
                        <table>
                            <thead>
                                <tr className="patientRow">
                                    <th className="index-num">Sr. No</th>
                                    <th className="index-num">Name</th>
                                    <th className="index-num">Gender</th>
                                    <th className="index-num">Age</th>
                                    <th className="index-num">Weight</th>
                                    <th className="index-num">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patients.map((patient,index) => 
                                    <tr>
                                        <td className="index-num">{index + 1}</td>
                                        <td className="index-num">{patient.name}</td>
                                        <td className="index-num">{patient.gender}</td>
                                        <td className="index-num">{patient.age}</td>
                                        <td className="index-num">{patient.weight} kg</td>
                                        <td className="index-num">{patient.phone}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <Link to="/" className="d-flex justify-content-center text-decoration-none"><button className="buttonStyle mt-3">Explore More</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Patients;