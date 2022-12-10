import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../Constants/constants";

export const reportFetch = createAsyncThunk(
    'report/fetch',
    async() => {
        try{
            const response = await axios.get(`${apiUrl}/ver1/flags`)
            .catch((err) => {
                return err
            })
            return response.data.flags
        }catch(error){

        }
    }
)
