import fetchStats from "../database/data";

export default function FAQ() {
    return <h1>FAQ</h1>;
}

export async function getStaticProps() {
    return {
        props: {
            pageTitle: "FAQ",
            stats: await fetchStats()
        },
        revalidate: 5
    };
}