import {createSlice} from "@reduxjs/toolkit";
import { userLogin } from "./userAction";

const initialState = {
    userInfo: null,
    status: 'idle',
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logout: (state) => {
        state.loading = false
        state.userInfo = null
        state.error = null
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(userLogin.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.status = 'succeded'
          state.userInfo = action.payload
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
  })

export const getUserStatus = (state) => state.user.status
export const getUserError = (state) => state.user.error
export const { logout } = userSlice.actions
export default userSlice.reducer