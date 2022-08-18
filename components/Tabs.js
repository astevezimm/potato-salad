import classes from "./Tabs.module.css";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Tabs(props) {
    const router = useRouter();
    
    const checkActive = path => path === router.pathname ? classes.active : "";
    const tab = (path, label) => (
        <li className={checkActive(path)}>
            <Link href={path}>{label}</Link>
        </li>
    )
    
    return (
        <nav className={classes.tabs}>
            <ul>
                {tab("/", "Campaign")}
                {tab("/faq", "FAQ")}
                {tab("/stretch-goals", "Stretch Goals")}
                {tab("/updates", "Updates")}
                {tab("/discussion", "Discussion")}
                <li className={classes.blank}>&nbsp;</li>
            </ul>
        </nav>
    )
}