import React, { useState } from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import NavBar from '../../ShareComponents/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDataChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <NavBar></NavBar>
            <AppointmentHeader handleDataChange={handleDataChange}></AppointmentHeader>
            <BookingAppointment date={selectedDate}></BookingAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;