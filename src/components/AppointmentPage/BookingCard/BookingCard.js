import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 text-center">
            <div className="card  border-0 shadow rounded">
                <div className="card-body p-5">
                    <h4 className="card-title textStyle">{booking.title}</h4>
                    <h5>{booking.time}</h5>
                    <p className="card-text text-secondary">{booking.space}</p>
                    <a href="#" onClick={openModal} className="btn buttonStyle">BOOK APPOINTMENT</a>
                    <AppointmentForm date={date} title={booking.title} openModal={modalIsOpen} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;