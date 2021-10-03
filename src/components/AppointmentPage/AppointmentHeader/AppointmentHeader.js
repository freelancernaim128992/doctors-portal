import React from 'react';
import chair from '../../../images/home-chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDataChange}) => {
    return (
        <main style={{height: '600px',width: '100%'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <Calendar
                    className="border-0 shadow-lg mt-5"
                    onChange={handleDataChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>        
        </main>
    );
};

export default AppointmentHeader;