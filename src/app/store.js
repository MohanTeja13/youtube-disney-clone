import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import useReducer from "../features/user/userSlice";

export default configureStore({
    reducer: {
        movie: movieReducer,
        user: useReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})