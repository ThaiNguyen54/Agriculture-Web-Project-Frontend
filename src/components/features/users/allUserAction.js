import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../Constants/constants"
import axios from "axios";


export const getAllUsers = createAsyncThunk(
    'allUser/getdata',
    async () => {
        try {
        const response = await axios.get(`${apiUrl}/ver1/users`)
        .catch((err) => {
            return err
        })
        return response.data.Users
        
        } catch (error) {

        }
    }
)