import '../styles/globals.css'
import Layout from "../components/Layout";
import {Provider} from "react-redux";
import store from "../store/store"

function MyApp({ Component, pageProps }) {
    if (Component.name === "FourOhFour")
        return <Component />;
    return (
        <Provider store={store}>
            <Layout {...pageProps} >
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp
