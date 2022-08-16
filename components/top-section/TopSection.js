import classes from "./TopSection.module.css"
import CampaignStats from "./CampaignStats";
import ImgGraph from "./ImgGraph";

export default function TopSection(props) {
    return (
      <div className={"row " + classes.top}>
          <div className="col-xl-6 col-lg-8">
              <ImgGraph image={props.image} />
          </div>
          <div className="col-xl-6 col-lg-4">
              <CampaignStats />
          </div>
      </div>
    );
}