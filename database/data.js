import mongoose from "mongoose";
import connect from "./mongoConnection";

if (!global.Stat)
    global.Stat = mongoose.model("Stat", new mongoose.Schema ({
        timeEnds: Date,
        goal: Number,
        totalAmount: Number,
        dailyAmounts: [Number],
        backers: Number,
        dailyBackers: [Number]
    }));

export default async function fetchStats() {
    await connect();
    const stats = await Stat.findOne({});
    return JSON.stringify(stats);
}