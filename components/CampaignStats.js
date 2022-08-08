import classes from "./CampaignStats.module.css"

export default function CampaignStats() {
    return (
        <div className={classes.stats}>
            <div className={classes.stat}>
                <h2><span className={classes.amount}><i>$</i>10,500</span>
                    <span className={classes["raised-of-label"]}>raised of</span>
                    <span className={classes.goal}><i>$</i>1,000,000</span>
                    <span className={classes.percent}>1<i>%</i> of goal</span>
                </h2>
            </div>
            <div className={classes.stat}>
                <h2><span className={classes.day}>18</span>
                    <span className={classes["days-left-label"]}>days left</span></h2>
            </div>
            <div className={classes["percent-bar"]} />
        </div>
    );
}