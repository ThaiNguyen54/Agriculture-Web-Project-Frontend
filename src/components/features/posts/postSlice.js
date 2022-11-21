import { createSlice } from "@reduxjs/toolkit";
import { postFetch } from "./postFetch";

const initialState = {
    posts: null,
    status: 'idle',
    error: null
}

export const getPostId = (state, postId) => {
    return state.post.posts.filter((item) => {
        if(item._id === postId){
            return item
        }
    })
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        getPostId: (state) => {
            console.log(state)
        }
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

export default postSlice.reducer