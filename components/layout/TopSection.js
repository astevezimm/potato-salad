import classes from "./TopSection.module.css"
import CampaignStats from "../CampaignStats";

export default function TopSection(props) {
    return (
      <div className={"row " + classes.top}>
          <div className="col-xl-6 col-lg-8">
              <img className={classes.top} src={props.image} alt="potato salad" />
          </div>
          <div className="col-xl-6 col-lg-4">
              <CampaignStats />
          </div>
      </div>
    );
}