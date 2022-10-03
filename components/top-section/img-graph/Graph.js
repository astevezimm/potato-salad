import classes from "./Graph.module.css"
import {useSelector} from "react-redux";

export default function Graph() {
    const {dailyAmounts, goal} = useSelector(state => state.campaignStats);
    
    let total = 0;
    
    function calcPercent(amount) {
        total += amount;
        return Math.min((total / goal) * 100, 100);    
    }
        
    return (
        <ul className={classes.graph}>
            {dailyAmounts.map((amount, index) => (
                <li key={index} className={classes.bar} style={{height: `${calcPercent(amount)}%`}} />
            ))}
        </ul>
    )
}