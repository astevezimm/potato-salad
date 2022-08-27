import mongoose from "mongoose";
import connect from "./mongoConnection";

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
    const ms_in_day = 86400000;
    const current = new Date();
    let date = startDate;
    while (date < current)
        date = new Date(+startDate + (campaignLength * ms_in_day));
    const timeLeft = date - new Date();
    return [date, timeLeft];
}

export default async function fetchStats() {
    const [timeEnds, timeLeft] = calcEndDate();
    await connect();
    const stats = await Stat.findOne({timeLeft: timeLeft});
    return JSON.stringify({...stats, goal, timeEnds});
}