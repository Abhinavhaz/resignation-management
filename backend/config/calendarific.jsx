const axios = require('axios');

const checkIfHoliday = async (date) => {
    try {
        const response = await axios.get(`https://calendarific.com/api/v2/holidays`, {
            params: {
                api_key: process.env.CALENDARIFIC_API_KEY,
                country: 'IN',
                year: new Date(date).getFullYear()
            }
        });

        const holidays = response.data.response.holidays;
        return holidays.some(holiday => holiday.date.iso === date);
    } catch (error) {
        console.error('Error fetching holidays:', error);
        return false;
    }
};

module.exports = checkIfHoliday;
