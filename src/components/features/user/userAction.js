import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../Constants/constants";


export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
        const response  =  await axios.post(`${apiUrl}/login`, {
            LoginName: email,
            Password: password
        })

        return response.data
        
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getUserInfo = createAsyncThunk(
    'user/profile',
    async({UserID}) => {
        try{
            const response = await axios.get(`${apiUrl}/ver1/users/${UserID}`)
            return response.data
        }catch(err){

        }
    }
)
