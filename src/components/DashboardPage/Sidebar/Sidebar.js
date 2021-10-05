import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const email = sessionStorage.getItem('email');
    const [isDoctor, setIsDoctor] = useState(false);
    useEffect(() => {
        const url = 'http://localhost:4000/isDoctor'
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(success => setIsDoctor(success))
    }, [])
    const handleLogOut = () => {
        sessionStorage.clear();
    }
    return (
        <div className="sidebar-container">
            <aside>
                <a className="sidebar-logo-style text-white" href="/">DOCTORS <span>PORTAL</span></a>
                <ul className="list-unlisted">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/dashboard/appointment">Appointment</a></li>
                    {
                        isDoctor && <div>
                            <li><a href="/dashboard/patients">Patients</a></li>
                            <li><a href="/dashboard/prescriptions">Prescriptions</a></li>
                            <li><a href="/dashboard/addDoctor">Add Doctor</a></li>
                            <li><a href="/dashboard/setting">Setting</a></li>
                        </div>
                    }
                    <li><a onClick={handleLogOut} href="/dashboard/setting">Log Out</a></li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;