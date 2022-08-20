export default function FAQ() {
    return <h1>FAQ</h1>;
}

export function getStaticProps() {
    return {
        props: {
            pageTitle: "FAQ"
        },
        //revalidate: 5
    };
}