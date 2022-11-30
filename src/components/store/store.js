import userReducer from "../features/user/userSlice";
import postReducer from "../features/posts/postSlice";
import allUserReducer from "../features/users/allUserSlice";
import answerReducer from "../features/answers/answersSlice";
import commentReducer from "../features/comments/commentSlice";
import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    user: userReducer,
    post: postReducer,
    alluser: allUserReducer,
    answer: answerReducer,
    comment: commentReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
})

export default store