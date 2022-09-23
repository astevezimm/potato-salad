import fetchStats from "../database/data";

export default function StretchGoals() {
    return <h1>Stretch Goals</h1>
}

export async function getStaticProps() {
    return {
        props: {
            pageTitle: "Stretch Goals",
            stats: await fetchStats()
        },
        revalidate: 1
    };
}