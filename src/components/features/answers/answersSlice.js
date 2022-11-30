import { createSlice } from "@reduxjs/toolkit";
import { answerFetch } from "./answersFetch";
const initialState = {
    answers: null,
    status: 'idle',
    error: null
}

export const getCommentPostId = (state, postId) => {
    return state.answer.answers.filter((item) => {
        if(item.QuestionID === postId){
            return item;
        }
    })
}

export const getCommentWithoutPostId = (state, postId) => {
    return state.answer.answers.filter((item) => {
        if(item.QuestionID !== postId){
            return item;
        }
    })
}

const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(answerFetch.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(answerFetch.fulfilled, (state, action) => {
                var sorted_answer = action.payload.sort((a, b) => {
                    return new Date(a.PostedDate).getTime() - new Date(b.PostedDate).getTime()
                }).reverse();
                state.answers = sorted_answer
                state.status = 'success'
            })
            .addCase(answerFetch.rejected, (state) => {
                state.status = 'failed'
                state.error = true
            })
    }
})

export default answerSlice.reducer