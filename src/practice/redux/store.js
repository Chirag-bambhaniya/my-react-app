import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './CounterSlice';
import StringSlice from "./StringSlice";
import { countMiddleware } from "./middleware/countMiddleware";
import apiMiddleware from "./middleware/apiMiddleware";
import personSlice from "./personSlice";

export default configureStore({
    reducer: {
        counter: CounterReducer,
        user: StringSlice,
        user: personSlice
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        countMiddleware,
        apiMiddleware,
    ],
})