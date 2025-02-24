import axios from 'axios';

const API_URL = 'http://localhost:8080/api/resignation/';

export const submitResignationService = (lastWorkingDay, reason) => {
    return axios.post(`${API_URL}submit`, { lastWorkingDay, reason });
};
