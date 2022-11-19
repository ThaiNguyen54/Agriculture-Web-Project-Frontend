import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../Constants/constants";

export const postFetch = createAsyncThunk(
    'post/fetch',
    async() => {
        try{
            const response = await axios.get(`${apiUrl}/ver1/questions`)
            .catch((err) => {
                return err
            })
            return response.data.questions
        }catch(error){

        }
    }
)