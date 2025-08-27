import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme.slice.js";


export const rootReducer = combineReducers({
    theme: themeReducer
})



