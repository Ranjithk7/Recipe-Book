import { configureStore } from "@reduxjs/toolkit";
import RecipeSlice from "./slices/RecipeSlice";
import searchSlice from "./slices/SearchSlice";

const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        recipies: RecipeSlice.reducer,
    }
})

export default store;