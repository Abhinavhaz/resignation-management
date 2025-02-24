import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import resignationReducer from './resignationSlice';
import exitInterviewReducer from './exitInterviewSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        resignation: resignationReducer,
        exitInterview: exitInterviewReducer,
    },
});
