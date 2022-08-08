import classes from "./CampaignStats.module.css"

export default function CampaignStats() {
    return (
        <div className={classes.stats}>
            <div className={classes.stat}>
                <h2>$10,500<br />raised of<br />$1,000,000<br />%1</h2>
            </div>
            <div className={classes.stat}>
                <h2>18<br />days left</h2>
            </div>
        </div>
    );
}