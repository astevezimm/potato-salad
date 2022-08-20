import Head from "next/head";

export default function MetaData(props) {
    const title = `Andrew Zimmerman | Making Potato Salad${props.title ? " | " + props.title : ""}`;
    
    return (
        <Head>
            <meta name="description" content={props.description} />
            <meta name="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />
            <title>{title}</title>
        </Head>  
    );
}