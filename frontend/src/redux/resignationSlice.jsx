import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitResignationService } from '../services/resignationService';

export const submitResignation = createAsyncThunk('resignation/submit', async ({ lastWorkingDay, reason }) => {
    const response = await submitResignationService(lastWorkingDay, reason);
    return response.data;
});

const resignationSlice = createSlice({
    name: 'resignation',
    initialState: {
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [submitResignation.pending]: (state) => {
            state.status = 'loading';
        },
        [submitResignation.fulfilled]: (state) => {
            state.status = 'success';
        },
        [submitResignation.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default resignationSlice.reducer;
