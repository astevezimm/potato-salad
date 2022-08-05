import classes from "./Header.module.css"
import Profile from "../Profile";

export default function Header(props) {
    return (
        <header>
            <Profile />
            <h1 className={classes.title + " heading"}>{props.title}</h1>
        </header>
    );
}