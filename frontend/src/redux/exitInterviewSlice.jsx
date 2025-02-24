import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitExitInterviewService } from '../services/exitInterviewService';

export const submitExitInterview = createAsyncThunk('exitInterview/submit', async (feedback) => {
    const response = await submitExitInterviewService(feedback);
    return response.data;
});

const exitInterviewSlice = createSlice({
    name: 'exitInterview',
    initialState: {
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitExitInterview.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitExitInterview.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(submitExitInterview.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default exitInterviewSlice.reducer;
