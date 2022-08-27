import mongoose from "mongoose";
import connect from "./mongoConnection";

Stat = mongoose.model("Stat", new mongoose.Schema ({
    totalAmount: Number,
    dailyAmounts: [Number],
    backers: Number,
    dailyBackers: [Number],
    timeLeft: Number
}));

connect();

//generate the stuff somehow?

mongoose.disconnect();