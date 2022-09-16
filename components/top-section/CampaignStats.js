import classes from "./CampaignStats.module.css"
import {useSelector} from "react-redux";
import useStatAutoRefresh from "../../hooks/useStatAutoRefresh";
import {millisecondsToMinutes, minutesToHours} from "date-fns";

export default function CampaignStats() {
    const {
        timeEnds,
        goal,
        totalAmount: amount,
        backers,
        timeLeft
    } = useSelector(state => state.campaignStats);
    
    useStatAutoRefresh();
    
    function format(value) {
        return value.toLocaleString("en-US");
    }
    
    function goalPercent() {
        return format((amount / goal) * 100);
    }
    
    function formattedEnd() {
        return timeEnds.toLocaleDateString("en-us", {year: "numeric", month: "short", day: "numeric"});
    }
    
    let formatted_timeLeft = millisecondsToMinutes(timeLeft);
    let unit_timeLeft = "minutes";
    if (formatted_timeLeft >= 60) {
        formatted_timeLeft = minutesToHours(formatted_timeLeft);
        unit_timeLeft = "hours";
        if (formatted_timeLeft >= 24) {
            formatted_timeLeft = Math.floor(formatted_timeLeft / 24);
            unit_timeLeft = "days";
        }
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
                    <h2><span className={classes.day}>{formatted_timeLeft}</span>
                        <span className={classes["days-left-label"]}>{unit_timeLeft} left</span>
                        <span className={classes["end-date"]}>ends {formattedEnd()}</span>
                    </h2>
                </div>
            </div>
            <div className={classes["percent-bar"]}>
                <div className={classes["percent-fill"]} style={{width: goalPercent() + "%"}} />
            </div>
        </div>
    );
}