import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        loggedIn: false,
        image: "/images/profile-placeholder.png"
    },
    reducers: {
        login: state => { state.loggedIn = true; },
        logout: state => { state.loggedIn = false; }
    }
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;