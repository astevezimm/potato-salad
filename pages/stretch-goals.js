import fetchStats from "../database/data";

export default function StretchGoals() {
    return (
        <div className="placeholder-content">
            <h2>Stretch Goals</h2>
            <p>To be implemented</p>
        </div>
    );
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