import classes from "./404.module.css"

export default function FourOhFour() {
    return (
        <div className={classes["four-oh-four"]}>
            <h1 className="heading">404</h1>
            <h2 className="heading">Who ate my potato salad?</h2>
            <img src="/images/empty-bowl.png" alt="Empty Bowl" />
        </div>
    );
}