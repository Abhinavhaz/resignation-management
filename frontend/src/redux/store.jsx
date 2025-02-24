import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import resignationReducer from './resignationSlice';
import exitInterviewReducer from './exitInterviewSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        resignation: resignationReducer,
        exitInterview: exitInterviewReducer,
    },
});

export default store;