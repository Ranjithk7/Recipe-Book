import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState: {
        filter: {
            query:'',
            orderBy: 'asc',
            category: ""
        },
    },
    reducers: {
        onQueryChange: (state, action) => {
            state.filter['query'] = action.payload
        },
        onSortByChange: (state, action) => {
            state.filter['sortBy'] = action.payload
        },
        onOrderByChange: (state, action) => {
            state.filter['orderBy'] = action.payload
        },
        
    }
})

export default searchSlice;