import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../Sidebar/Sidebar';

const AppointmentContainer = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [appointments, setAppointments] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const handleDataChange = date => {
        const formateDate = date.toDateString();
        setSelectedDate(formateDate)
    }
    useEffect(() => {
        fetch('http://localhost:4000/appointmentsByDate',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({date : selectedDate})
        })
        .then(res => res.json())
        .then(appointment => {
            setAppointments(appointment)
            setSpinner(true)
        })
    }, [selectedDate])
    const appointmentListHeading = {
        color: '#19d3b2',
        fontWeight: '700'
    }
    const tableHeadStyle = {
        paddingRight: '90px'
    }
    return (
        <section className="bg-light">
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <h3 className="main-header">Appointments</h3>
                        <div className="col-md-5 mt-5">
                        <Calendar
                            className="border-0 shadow-lg p-5 w-100 rounded"
                            onChange={handleDataChange}
                            value={new Date()}
                        />
                        </div>
                        <div className="col-md-5">
                            <div className="table-container">
                                <div className="d-flex justify-content-between">
                                    <h5 style={appointmentListHeading}>Appointments</h5>
                                    <b className="text-secondary">{selectedDate}</b>
                                </div>
                                {
                                    spinner ?
                                        <div>
                                            {
                                                appointments.length ? 
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th style={tableHeadStyle}>Name</th>
                                                            <th style={tableHeadStyle}>Schedule</th>
                                                            <th style={tableHeadStyle}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            appointments.map(data => 
                                                            <tr>
                                                                <td className="pb-3">{data.name}</td>
                                                                <td className="pb-3">07:00 PM</td>
                                                                <td className="pb-3">
                                                                    <select className="buttonStyle">
                                                                        <option className="text-dark">Not Visited</option>
                                                                        <option className="text-dark">Visited</option>
                                                                    </select>
                                                                </td>
                                                            </tr>)
                                                        }
                                                    </tbody>
                                                </table>
                                                : 
                                                <h5 className="text-danger mt-4">There is no appointment found!</h5>
                                            }
                                        </div>
                                        : <div className="d-flex justify-content-center">
                                            <div id="spinner" className="spinner-border text-primary text-center" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentContainer;