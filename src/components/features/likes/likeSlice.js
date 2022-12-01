import { createSlice } from "@reduxjs/toolkit";
import { likeFetch } from "./likeFetch";

const initialState = {
    likes: null,
    status: 'idle',
    error: null
}

export const likeCountPost = (state, QuestionId) => {
    let count = 0;
    state.like.likes.filter((item) => {
        if(item.QuestionID === QuestionId){
            count++;
        }
    })
    return count;
}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(likeFetch.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(likeFetch.fulfilled, (state, action) => {
                state.likes = action.payload
                state.status = 'success'
            })
            .addCase(likeFetch.rejected, (state) => {
                state.status = 'failed'
                state.error = true
            })
    }
})

export default likeSlice.reducer
