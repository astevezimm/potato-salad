import Head from "next/head";

export default function Layout(props) {
    const projectDescription = "I'm Pretending to Make a Potato Salad with Fake Money $$$";
    
    const description = props.description || projectDescription;
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
            <header>
                <h1 className="title">{projectDescription}</h1>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <h4>
                    <a href="https://github.com/astevezimm/potato-salad" target="_blank">Source code for this site available here!</a>
                </h4>
                <h4>
                    <a href="https://andrew-zimmerman.herokuapp.com/" target="_blank">And here's my main website!</a>
                </h4>
                <p>Andrew Zimmerman Copyright © {new Date().getFullYear()}</p>
            </footer>
        </>
    );
}