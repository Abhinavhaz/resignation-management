import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitResignationService } from '../services/resignationService';

// Async thunk for submitting resignation request
export const submitResignation = createAsyncThunk('resignation/submit', async ({ lastWorkingDay, reason }) => {
    const response = await submitResignationService(lastWorkingDay, reason);
    return response.data;
});

// Slice for managing resignation state
const resignationSlice = createSlice({
    name: 'resignation',
    initialState: {
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitResignation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitResignation.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(submitResignation.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default resignationSlice.reducer;
