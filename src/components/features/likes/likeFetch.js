import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../Constants/constants";

export const likeFetch = createAsyncThunk(
    'like/fetch',
    async() => {
        try{
            const response = await axios.get(`${apiUrl}/ver1/post-like`)
            .catch((err) => {
                return err
            })
            return response.data.likes
        }catch(error){

        }
    }
)