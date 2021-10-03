import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <aside>
                <a className="sidebar-logo-style text-white" href="/">DOCTORS <span>PORTAL</span></a>
                <ul className="list-unlisted">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/dashboard/appointment">Appointment</a></li>
                    <li><a href="/dashboard/patients">Patients</a></li>
                    <li><a href="/dashboard/prescriptions">Prescriptions</a></li>
                    <li><a href="/dashboard/addDoctor">Add Doctor</a></li>
                    <li><a href="/dashboard/setting">Setting</a></li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;