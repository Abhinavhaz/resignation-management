import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EmployeeDashboard = () => {
    const { user } = useSelector(state => state.auth);

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <Link to="/resignation-form">Submit Resignation</Link>
        </div>
    );
};

export default EmployeeDashboard;
