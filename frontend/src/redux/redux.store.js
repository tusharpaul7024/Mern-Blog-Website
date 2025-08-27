import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./features/redux.reducers.js";


export const store = configureStore({
    reducer: rootReducer
})