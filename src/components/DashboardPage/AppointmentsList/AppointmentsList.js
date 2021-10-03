import React from 'react';

const AppointmentsList = ({appointment}) => {
    return (
        <div>
            <li>{appointment.name}</li>
        </div>
    );
};

export default AppointmentsList;