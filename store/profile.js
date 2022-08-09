import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        loggedIn: false,
        image: "/images/profile-placeholder.png",
        firstName: ""
    },
    reducers: {
        /* will eventually be called through an Action Creator */
        login: (state/*, action*/) => {
            state.loggedIn = true;
            //state.image = action.payload.image;
            //state.firstName = action.payload.firstName;
        },
        
        logout: state => { state.loggedIn = false; },
        changeProfilePic: (state, action) => {
            state.image = action.payload;
        },
        changeFirstName: (state, action) => {
            state.firstName = action.payload;
        }
    }
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;