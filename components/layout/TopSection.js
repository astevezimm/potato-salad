import classes from "./TopSection.module.css"

export default function TopSection(props) {
    return (
      <div className="row">
          <div className="col-xl-6 col-lg-8">
              <img className={classes.top} src={props.image} alt="potato salad" />
          </div>
          <div className="col-xl-6 col-lg-4">
              
          </div>
      </div>
    );
}