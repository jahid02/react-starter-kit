import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: null | { id: string; email: string };
    accessToken: null | string;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
