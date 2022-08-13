import classes from "./CampaignStats.module.css"
import {useSelector} from "react-redux";

export default function CampaignStats() {
    const {
        timeEnds,
        goal,
        totalAmount: amount,
        backers
    } = useSelector(state => state.campaignStats);
    
    function format(value) {
        return value.toLocaleString("en-US");
    }
    
    function goalPercent() {
        return format((amount / goal) * 100);
    }
    
    function daysLeft() {
        return Math.floor((timeEnds - new Date()) / 86400000);
    }
    
    function formatedEnd() {
        return timeEnds.toLocaleDateString("en-us", {year: "numeric", month: "short", day: "numeric"});
    }
    
    return (
        <div className={classes["stats-area"]}>
            <div className={classes.stats}>
                <div className={classes.stat}>
                    <h2><span className={classes.amount}><i>$</i>{format(amount)}</span>
                        <span className={classes["raised-of-label"]}>raised of</span>
                        <span className={classes.goal}><i>$</i>{format(goal)}</span>
                        <span className={classes.percent}>{goalPercent()}<i>%</i> of goal</span>
                        <span className={classes.backers}>by {format(backers)} backers</span>
                    </h2>
                </div>
                <div className={classes.stat}>
                    <h2><span className={classes.day}>{daysLeft()}</span>
                        <span className={classes["days-left-label"]}>days left</span>
                        <span className={classes["end-date"]}>ends {formatedEnd()}</span>
                    </h2>
                </div>
            </div>
            <div className={classes["percent-bar"]}>
                <div className={classes["percent-fill"]} style={{width: goalPercent() + "%"}} />
            </div>
        </div>
    );
}