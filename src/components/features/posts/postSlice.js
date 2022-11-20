import { createSlice } from "@reduxjs/toolkit";
import { postFetch } from "./postFetch";

const initialState = {
    posts: null,
    status: 'idle',
    error: null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(postFetch.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postFetch.fulfilled, (state, action) => {
                state.posts = action.payload
                state.status = 'success'
            })
            .addCase(postFetch.rejected, (state) => {
                state.status = 'failed'
                state.error = true
            })
    }
})

export const {getPostCrop} = postSlice.actions
export default postSlice.reducer