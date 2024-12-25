import { configureStore } from "@reduxjs/toolkit";
import RecipeSlice from "./slices/RecipeSlice";

const store = configureStore({
    reducer: {
        recipies: RecipeSlice.reducer,
    }
})

export default store;