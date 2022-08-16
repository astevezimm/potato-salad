import classes from "./TopSection.module.css";
import {useState} from "react";

export default function ImgGraph(props) {
    const [graphActive, setGraphActive] = useState(false);
    
    function handleClick() {
        setGraphActive(prev => !prev)
    }
    
    const buttonLabel = graphActive ? "Hide Graph" : "Show Graph";
    
    return (
        <div className={classes["img-graph"]}>
            <img className={graphActive ? classes["graph-active"] : ""} src={props.image} alt="potato salad" />
            <button className="button" onClick={handleClick}>{buttonLabel}</button>
        </div>
    );
}