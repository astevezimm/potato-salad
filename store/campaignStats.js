import {createSlice} from "@reduxjs/toolkit";

const campaignStatsSlice = createSlice({
    name: "campaignStats",
    initialState: {
        timeEnds: new Date(2023, 8, 24),
        goal: 1000000,
        totalAmount: 2500000,
        dailyAmounts: [],
        backers: 2,
        dailyBackers: [],
        timeLeft: +(new Date(3000, 11))
    },
    reducers: {
        update: (state, action) => {
            if (action.payload.timeLeft > state.timeLeft)
                return;
            state.timeEnds = new Date(action.payload.timeEnds);
            state.goal = action.payload.goal;
            state.totalAmount = action.payload.totalAmount;
            state.dailyAmounts = action.payload.dailyAmounts;
            state.backers = action.payload.backers;
            state.dailyBackers = action.payload.dailyBackers;
            state.timeLeft = action.payload.timeLeft;
        }
    }
});

export const campaignStatsActions = campaignStatsSlice.actions;
export const campaignStatsReducer = campaignStatsSlice.reducer;