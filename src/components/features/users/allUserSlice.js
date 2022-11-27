import { getAllUsers } from "./allUserAction"

const initialState = {
    users: null,
    status: 'idle',
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = action.payload
        })
    }
})