import {configureStore} from "@reduxjs/toolkit";
import {profileReducer} from "./profile";
import {campaignStatsReducer} from "./campaignStats";

const store = configureStore({
   reducer: {
       profile: profileReducer,
       campaignStats: campaignStatsReducer
   } 
});

export default store;