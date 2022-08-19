import classes from "./Tabs.module.css";
import {useRouter} from "next/router";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";

export default function Tabs(props) {
    const [sticky, setSticky] = useState("");
    const router = useRouter();
    
    const checkActive = path => path === router.pathname ? classes.active : "";
    const tab = (path, label) => (
        <li className={checkActive(path)}>
            <Link href={path}>{label}</Link>
        </li>
    )

    const ref = useRef();
    useEffect(() => {
        window.onscroll = () => {
            setSticky(ref.current.getBoundingClientRect().top <= 0 ? ` ${classes.sticky}` : "");
        }
    }, []);
    
    return (
        <div ref={ref}>
            <nav className={classes.tabs + sticky}>
                <ul>
                    {tab("/", "Campaign")}
                    {tab("/faq", "FAQ")}
                    {tab("/stretch-goals", "Stretch Goals")}
                    {tab("/updates", "Updates")}
                    {tab("/discussion", "Discussion")}
                    <li className={classes.blank}>&nbsp;</li>
                </ul>
            </nav>
        </div>
    )
}