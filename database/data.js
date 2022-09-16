import mongoose from "mongoose";
import connect from "./mongoConnection";
import {addDays} from "date-fns";

if (!global.Stat)
    global.Stat = mongoose.model("Stat", new mongoose.Schema ({
        totalAmount: Number,
        dailyAmounts: [Number],
        backers: Number,
        dailyBackers: [Number],
        timeLeft: Number
    }));

const goal = 1000000;
const startDate = new Date(2022, 8, 12);
const campaignLength = 30;

function calcEndDate() {
    const current = new Date();
    let date = startDate;
    while (date < current)
        date = addDays(startDate, campaignLength);
    const timeLeft = date - new Date();
    return [date, timeLeft];
}

export default async function fetchStats() {
    const [timeEnds, timeLeft] = calcEndDate();
    await connect();
    const stats = await Stat.findOne({timeLeft: +timeLeft}); //todo: this needs to be a 5 second range to work right
    return JSON.stringify({...stats, goal, timeEnds});
}