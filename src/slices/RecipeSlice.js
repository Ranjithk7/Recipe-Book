import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecipe = createAsyncThunk(
    'fetch-all-recipe',
    async ({url}, { rejectWithValue}) => {
        try {
            const res = await axios.get(url);
            const data = await res.data?.meals;
            return data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
)

const RecipeSlice = createSlice({
    name:'recipe',
    initialState: {
        fetchStatus: '',
        data : [],
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllRecipe.fulfilled, (state, action) => {
            state.data = action.payload;
            state.fetchStatus = 'success'
        })
        .addCase(fetchAllRecipe.pending, (state) => {
            state.fetchStatus = 'pending';
        })
        .addCase(fetchAllRecipe.rejected, (state, action) => {
            state.fetchStatus = 'error';
            state.error = action.payload;
        })
    }
})

export default RecipeSlice;