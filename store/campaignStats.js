import {createSlice} from "@reduxjs/toolkit";

const campaignStatsSlice = createSlice({
    name: "campaignStats",
    initialState: {
        timeEnds: new Date(2023, 8, 24),
        goal: 1000000,
        totalAmount: 0,
        dailyAmounts: [],
        backers: 0,
        dailyBackers: []
    },
    reducers: {
        update: (state, action) => {
            state.timeEnds = action.timeEnds;
            state.goal = action.goal;
            state.totalAmount = action.totalAmount;
            state.dailyAmounts = action.dailyAmounts;
            state.backers = action.backers;
            state.dailyBackers = action.dailyBackers;
        }
    }
});

export const campaignStatsActions = campaignStatsSlice.actions;
export const campaignStatsReducer = campaignStatsSlice.reducer;