import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginService } from '../services/authService';

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
    const response = await loginService(email, password);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default authSlice.reducer;
