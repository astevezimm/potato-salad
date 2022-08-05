import Head from "next/head";

export default function MetaData(props) {
    const image = props.image || "/images/header.png";
    const title = props.title || "Andrew Zimmerman | Making Potato Salad";
    
    return (
        <Head>
            <meta name="description" content={props.description} />
            <meta name="og:description" content={props.description} />
            <meta property="og:image" content={image} />
            <title>{title}</title>
        </Head>  
    );
}