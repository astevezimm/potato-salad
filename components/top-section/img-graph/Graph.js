import classes from "./Graph.module.css"
import {useSelector} from "react-redux";

export default function Graph() {
    const {dailyAmounts} = useSelector(state => state.campaignStats);
    const maxAmount = Math.max(dailyAmounts);
    
    function calcPercent(amount) {
        return Math.min((amount / maxAmount) * 100, 100);    
    }
        
    return (
        <ul className={classes.graph}>
            {dailyAmounts.map((amount, index) => (
                <li key={index} className={classes.bar} style={{height: calcPercent(amount)}} />
            ))}
        </ul>
    )
}