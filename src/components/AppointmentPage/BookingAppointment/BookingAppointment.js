import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookingAppointment = ({ date }) => {
    const bookingData = [
        {
            id: 1,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: '10 SPACES AVAILABLE'
        },
        {
            id: 2,
            title: 'Cosmetic Dentistry',
            time: '10:05 AM - 11:30 AM',
            space: '10 SPACES AVAILABLE'
        },
        {
            id: 3,
            title: 'Teeth Cleaning',
            time: '5:00 AM - 6:30 AM',
            space: '10 SPACES AVAILABLE'
        },
        {
            id: 4,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: '10 SPACES AVAILABLE'
        },
        {
            id: 5,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: '10 SPACES AVAILABLE'
        },
        {
            id: 6,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: '10 SPACES AVAILABLE'
        }
    ]
    return (
        <section className="pb-5">
            <div className="text-center">
                <h1 className="mt-5 fw-bold textStyle">Available Appointments on {date.toDateString()}</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    {
                        bookingData.map(booking => <BookingCard date={date} key={booking.id} booking={booking}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingAppointment;