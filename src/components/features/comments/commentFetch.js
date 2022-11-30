import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../Constants/constants";

export const commentFetch = createAsyncThunk(
    'comment/fetch',
    async() => {
        try{
            const response = await axios.get(`${apiUrl}/ver1/comments`)
            .catch((err) => {
                return err
            })
            return response.data.comments
        }catch(error){

        }
    }
)