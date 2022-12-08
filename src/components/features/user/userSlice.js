import {createSlice} from "@reduxjs/toolkit";
import { userLogin } from "./userAction";
import { getUserInfo } from "./userAction";
const initialState = {
    userInfo: null,
    status: 'idle',
    error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginfailed: (state) => {
      state.status = 'idle'
    },
    logout: (state) => {
      state.userInfo = null
      state.error = null
      state.status = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userInfo = action.payload
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userInfo = action.payload
      })
  }
})

export const getUserStatus = (state) => {
  return state.user.status
}
export const getUserError = (state) => state.user.error
export const { logout, loginfailed } = userSlice.actions
export default userSlice.reducer