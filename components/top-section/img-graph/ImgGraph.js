import classes from "./ImgGraph.module.css";
import {useState} from "react";
import Graph from "./Graph";

export default function ImgGraph(props) {
    const [graphActive, setGraphActive] = useState(false);
    
    const handleClick = () => setGraphActive(!graphActive);
    
    function openGraph() {
        setGraphActive(true);
    }

    function closeGraph() {
        setGraphActive(false);
    }
    
    const buttonLabel = graphActive ? "Hide Graph" : "Show Graph";
    const imgClass = graphActive ? classes["graph-active"] : "";
    
    return (
        <div className={classes["img-graph"]} onMouseEnter={openGraph} onMouseLeave={closeGraph}>
            <img className={imgClass} src={props.image} alt="potato salad" />
            {graphActive && <Graph />}
            <button className="button" onClick={handleClick}>{buttonLabel}</button>
        </div>
    );
}