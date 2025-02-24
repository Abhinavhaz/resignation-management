import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitResignation } from '../redux/resignationSlice';

const ResignationForm = () => {
    const [lastWorkingDay, setLastWorkingDay] = useState('');
    const [reason, setReason] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitResignation({ lastWorkingDay, reason }))
            .then(() => alert('Resignation submitted!'))
            .catch((err) => alert('Failed to submit resignation'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                value={lastWorkingDay}
                onChange={(e) => setLastWorkingDay(e.target.value)}
                required
            />
            <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                placeholder="Reason for resignation"
            />
            <button type="submit">Submit Resignation</button>
        </form>
    );
};

export default ResignationForm;
