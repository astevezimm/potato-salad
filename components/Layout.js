import Head from "next/head";

export default function Layout(props) {
    const description = props.description || "I'm Pretending to Make a Potato Salad with Fake Money $$$";
    const image = props.image || "/images/header.png";
    const title = props.title || "Andrew Zimmerman | Making Potato Salad";
    
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="og:description" content={description} />
                <meta property="og:image" content={image} />
                <title>{title}</title>
            </Head>
            {props.children}
        </>
    );
}