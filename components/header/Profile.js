import {useDispatch, useSelector} from "react-redux";
import {profileActions} from "../../store/profile";
import classes from "./Profile.module.css";

export default function Profile() {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    
    return profile.loggedIn ?
        <img className={classes.profile} src={profile.image} alt="profile" /> :
        <button className={classes.profile} onClick={() => dispatch(profileActions.login())}>Log In</button>;
}