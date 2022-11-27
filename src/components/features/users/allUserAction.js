export const getAllUsers = createAsyncThunk(
    'user/login',
    async ({ rejectWithValue }) => {
        try {
        const response = await axios.get(`${apiUrl}/ver1/authenticate/users`)
        return response
        
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)