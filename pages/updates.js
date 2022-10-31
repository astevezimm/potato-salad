import fetchStats from "../database/data";

export default function Updates() {
    return (
        <div className="placeholder-content">
            <h2>Updates</h2>
            <p>To be implemented</p>
        </div>
    );
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