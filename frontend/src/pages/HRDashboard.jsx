import React from 'react';
import { useSelector } from 'react-redux';

const HRDashboard = () => {
    const { user } = useSelector(state => state.auth);

    return (
        <div>
            <h1>Welcome, HR {user.username}</h1>
            <p>Manage Resignations</p>
        </div>
    );
};

export default HRDashboard;
