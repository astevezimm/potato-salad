import MetaData from "./MetaData"
import Header from "./Header";
import TopSection from "./TopSection"
import Footer from "./Footer";

export default function Layout(props) {
    const projectDescription = "I'm Pretending to Make a Potato Salad with Fake Money$$$";
    const headerImg = "/images/header.png";
    
    return (
        <>
            <MetaData
                image={props.image || headerImg}
                description={props.description || projectDescription}
            />
            <Header title={projectDescription} />
            <main>
                <div className="container">
                    <TopSection image={headerImg} />
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
}