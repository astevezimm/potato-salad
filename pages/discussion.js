export default function Discussion() {
    return <h1>Discussion</h1>
}

export function getStaticProps() {
    return {
        props: {
            pageTitle: "Discussion"
        },
        //revalidate: 5
    };
}