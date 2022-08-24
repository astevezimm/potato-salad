import dotenv from "dotenv";
dotenv.config();
import mongoose, {Schema} from "mongoose";

export default async function fetchStats() {
    await mongoose.connect(process.env.DB_URL);

    const Stat = mongoose.model("Stat", new Schema ({
        timeEnds: Date,
        goal: Number,
        totalAmount: Number,
        dailyAmounts: [Number],
        backers: Number,
        dailyBackers: [Number]
    }));
    
    const stats = await Stat.findOne({});
    await mongoose.connection.close();
    return JSON.stringify(stats);
}