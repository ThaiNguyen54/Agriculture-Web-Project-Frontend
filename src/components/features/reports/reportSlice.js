import { createSlice } from "@reduxjs/toolkit";
import { reportFetch } from "./reportFetch";

const initialState = {
    reports: null,
    status: 'idle',
    error: null
}


const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(reportFetch.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(reportFetch.fulfilled, (state, action) => {
                state.reports = action.payload
                state.status = 'success'
            })
            .addCase(reportFetch.rejected, (state) => {
                state.status = 'failed'
                state.error = true
            })
    }
})

export default reportSlice.reducer