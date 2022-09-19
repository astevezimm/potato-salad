const mongoose = require("mongoose");
const {connect} = require("./mongoConnection");
const milliseconds = require("date-fns/milliseconds");

const Stat = mongoose.model("Stat", new mongoose.Schema ({
    totalAmount: Number,
    dailyAmounts: [Number],
    backers: Number,
    dailyBackers: [Number],
    timeLeft: Number
}));

async function generate() {
    await connect();

    const currentStat = {
        totalAmount: 0,
        dailyAmounts: [],
        backers: 0,
        dailyBackers: [],
        timeLeft: milliseconds({days: 30})
    }
    const stats = [{...currentStat}];

    const iters = currentStat.timeLeft / milliseconds({seconds: 5});
    const itersPerDay = iters / 30;

    let prevDayTotal = 0;
    let nextBacking = 0;
    for (let i = 1, j = 0; i <= iters; i++) {
        if (j >= nextBacking) {
            currentStat.totalAmount += 35;
            j = 0;
            nextBacking = Math.floor(Math.random() * 20);
        } else
            j++;
        currentStat.backers = Math.floor(currentStat.totalAmount / 35);
        if (i % itersPerDay === 0) {
            const newDailyAmount = currentStat.totalAmount - prevDayTotal;
            currentStat.dailyAmounts = [...currentStat.dailyAmounts, newDailyAmount];
            currentStat.dailyBackers = [...currentStat.dailyBackers, newDailyAmount / 35];
            prevDayTotal = currentStat.totalAmount;
        }
        currentStat.timeLeft -= milliseconds({seconds: 5});
        stats.push({...currentStat});
    }

    console.log("writing to db...");
    for (let i = 0; i < stats.length; i += 1000) {
        await Stat.insertMany(stats.slice(i, i + 1000));
        console.log(`${i + 1000} documents written`);
    }
    console.log("completed!")
    
    mongoose.disconnect();
}

generate();