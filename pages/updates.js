import fetchStats from "../database/data";

export default function Updates() {
    return <h1>Updates</h1>
}

export async function getStaticProps() {
    return {
        props: {
            pageTitle: "Updates",
            stats: await fetchStats()
        },
        revalidate: 1
    };
}