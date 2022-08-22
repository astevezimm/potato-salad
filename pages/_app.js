import '../styles/globals.css'
import Layout from "../components/Layout";
import {Provider, useDispatch} from "react-redux";
import store from "../store/store"
import {campaignStatsActions} from "../store/campaignStats";

function MyApp({ Component, pageProps }) {
    if (Component.name === "FourOhFour")
        return <Component />;
    
    useDispatch(campaignStatsActions.update(pageProps.stats));
    
    return (
        <Provider store={store}>
            <Layout {...pageProps} >
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp
