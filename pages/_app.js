import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <Layout {...pageProps} >
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
