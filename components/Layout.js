import MetaData from "./MetaData"
import Header from "./header/Header";
import TopSection from "./top-section/TopSection"
import Footer from "./footer/Footer";
import Tabs from "./Tabs";
import {useDispatch} from "react-redux";
import {campaignStatsActions} from "../store/campaignStats";

export default function Layout(props) {
    const projectDescription = "I'm Pretending to Make a Potato Salad with Fake Money$$$";
    const headerImg = "/images/header.png";

    const dispatch = useDispatch();
    console.log(props.stats);
    dispatch(campaignStatsActions.update(JSON.parse(props.stats)));
    
    return (
        <>
            <MetaData
                image={props.image || headerImg}
                description={props.description || projectDescription}
                title={props.pageTitle}
            />
            <Header title={projectDescription} />
            <main>
                <div className="container">
                    <TopSection image={headerImg} />
                    <Tabs />
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
}