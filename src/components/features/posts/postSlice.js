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

export const getPostFromUserId = (state, userId) => {
    return state.post.posts.filter((item) => {
        if(item.UserID === userId){
            return item
        }
    })
}

export const countPost = (state, userId) => {
    let count = 0;
    state.post.posts.map((item) => {
        if(item.UserID === userId){
            count++;
        }
    })
    return count
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
                var sorted_answer = action.payload.sort((a, b) => {
                    return new Date(a.PostedDate).getTime() - new Date(b.PostedDate).getTime()
                }).reverse();
                state.posts = sorted_answer
                state.status = 'success'
            })
            .addCase(postFetch.rejected, (state) => {
                state.status = 'failed'
                state.error = true
            })
    }
})

export default postSlice.reducer