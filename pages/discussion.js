import fetchStats from "../database/data";

export default function Discussion() {
    return <h1>Discussion</h1>
}

export async function getStaticProps() {
    return {
        props: {
            pageTitle: "Discussion",
            stats: await fetchStats()
        },
        revalidate: 1
    };
}