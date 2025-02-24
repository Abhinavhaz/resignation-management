import axios from 'axios';

const API_URL = 'http://localhost:8080/api/exit-interview/';

export const submitExitInterviewService = (feedback) => {
    return axios.post(`${API_URL}submit`, { feedback });
};
