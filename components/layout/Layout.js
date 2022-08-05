import MetaData from "./MetaData"
import Header from "./Header";
import TopSection from "./TopSection"
import Footer from "./Footer";

export default function Layout(props) {
    const projectDescription = "I'm Pretending to Make a Potato Salad with Fake Money$$$";
    
    return (
        <>
            <MetaData {...props} description={props.description || projectDescription} />
            <Header title={projectDescription} />
            <main>
                <TopSection />
                <div className="container">
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
}