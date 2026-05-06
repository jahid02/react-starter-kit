import { apiSlice } from '@/features/api/apiSlice';
import { login, logout } from '@/features/auth/authSlice';

interface AuthResponse {
    data: {
        id: number;
        username: string;
        email: string;
    };
}

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, { username: string; password: string }>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify(result.data.data));
                    dispatch(login(result.data.data));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    localStorage.removeItem("auth");
                    dispatch(logout());
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        register: builder.mutation<AuthResponse, { username: string; email: string; password: string }>({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify(result.data.data));
                    dispatch(login(result.data.data));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
    overrideExisting: false,
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi;
