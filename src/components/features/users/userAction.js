import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../Constants/constants";


export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {

        const {data}  =  await axios.post(`${apiUrl}/login`, {
                LoginName: email,
                Password: password
            })
        return data
        } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
        }
    }
)