export default function Updates() {
    return <h1>Updates</h1>
}

export function getStaticProps() {
    return {
        props: {
            pageTitle: "Updates"
        },
        //revalidate: 5
    };
}