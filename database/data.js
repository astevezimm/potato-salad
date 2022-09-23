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

function roundTo5Secs(time) {
    return (Math.ceil(+time / 5000)) * 5000;
}

export default async function fetchStats() {
    const [timeEnds, timeLeft] = calcEndDate();
    await connect();
    const stats = await Stat.findOne({timeLeft: roundTo5Secs(timeLeft)});
    return JSON.stringify({
        totalAmount: stats.totalAmount,
        dailyAmounts: stats.dailyAmounts,
        backers: stats.backers,
        dailyBackers: stats.dailyBackers,
        timeLeft, goal, timeEnds
    });
}