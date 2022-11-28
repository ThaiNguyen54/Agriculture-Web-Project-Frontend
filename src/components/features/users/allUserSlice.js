import { getAllUsers } from "./allUserAction"
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: null,
    status: 'idle',
    error: null,
}


export const GetUserId = (state, userId) => {
    return state.alluser.users.filter((item) => {
        if(item.userId === userId){
            return item
        }
    })
}


const allUserSlice = createSlice({
    name: 'alluser',
    initialState,
    reducers: {
        reset: (state) => {
            state.users = null
            state.error = null
            state.status = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = action.payload
        })
    }
})

export const { reset } = allUserSlice.actions
export default allUserSlice.reducer