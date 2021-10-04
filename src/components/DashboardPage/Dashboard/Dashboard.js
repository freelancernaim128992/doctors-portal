import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="bg-light">
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h1>Dashboard</h1>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;