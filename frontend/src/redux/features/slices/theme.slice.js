import { createSlice } from "@reduxjs/toolkit";

// need to make some changes
// basically need to add some init in reducer
const initialState = {
    mode : JSON.parse(window?.localStorage.getItem("theme")) ?? "light"
}


const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        setMode: (state,action) => {
            state.mode = action.payload
            localStorage.setItem("theme",JSON.stringify(action.payload));
        }
    }
})

export default themeSlice.reducer;
export const { setMode } = themeSlice.actions 

