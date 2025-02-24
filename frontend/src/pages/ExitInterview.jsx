import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitExitInterview } from '../redux/exitInterviewSlice';

const ExitInterview = () => {
    const [feedback, setFeedback] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitExitInterview({ feedback }))
            .then(() => alert('Exit Interview submitted!'))
            .catch((err) => alert('Failed to submit exit interview'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                placeholder="Exit Interview Feedback"
            />
            <button type="submit">Submit Exit Interview</button>
        </form>
    );
};

export default ExitInterview;
