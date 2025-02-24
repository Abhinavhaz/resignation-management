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
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [login.rejected]: (state) => {
            state.loading = false;
        },
    },
});

export default authSlice.reducer;
