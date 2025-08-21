import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        },
        removeCategory: (state, action: PayloadAction<string>) => {
            return state.filter(category => category !== action.payload);
        },
        resetCategories: () => {
            return [];
        },
    },
});

export const { addCategory, removeCategory, resetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
