import { createSlice } from "@reduxjs/toolkit";
import { commentFetch } from "./commentFetch";
const initialState = {
    comments: null,
    status: 'idle',
    error: null
}

export const getCommentReplyId = (state, answerId) => {
    return state.comment.comments.filter((item) => {
        if(item.AnswerID === answerId){
            return item;
        }
    })
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(commentFetch.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(commentFetch.fulfilled, (state, action) => {
                state.comments = action.payload
                state.status = 'success'
            })
            .addCase(commentFetch.rejected, (state) => {
                state.status = 'failed'
                state.error = true
            })
    }
})

export default commentSlice.reducer