import mongoose from "mongoose";
import connect from "./mongoConnection";

const Stat = mongoose.model("Stat", new mongoose.Schema ({
    totalAmount: Number,
    dailyAmounts: [Number],
    backers: Number,
    dailyBackers: [Number],
    timeLeft: Number
}));

connect();

const currentStat = {
    totalAmount: 0,
    dailyAmounts: [],
    backers: 0,
    dailyBackers: [],
    timeLeft: 2592000000
}
const stats = [{...currentStat}];

const iters = 518400000;
const itersPerDay = 17280;
let prevDayTotal = 0;

for (let i = 1; i <= iters; i++) {
    currentStat.totalAmount = Math.log(i / (1 - i)); //todo: keep working on this until it's actually correct
    currentStat.backers = Math.floor(currentStat.totalAmount / 35);
    if (i % itersPerDay === 0) {
        const newDailyAmount = currentStat.totalAmount - prevDayTotal;
        currentStat.dailyAmounts = [...currentStat.dailyAmounts, newDailyAmount];
        currentStat.dailyBackers = [...currentStat.dailyBackers, newDailyAmount / 35];
        prevDayTotal = currentStat.totalAmount;
    }
    currentStat.timeLeft -= 5;
    stats.push({...currentStat});
}

//todo: Stat.insertMany

mongoose.disconnect();