import { apiSlice } from '@/features/api/apiSlice';

interface Category {
    id: number;
    name: string;
    description?: string;
}


export const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => '/categories',
        }),
    }),
    overrideExisting: false,
});

export const { useGetCategoriesQuery } = categoriesApi;
