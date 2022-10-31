import fetchStats from "../database/data";

export default function Discussion() {
    return (
        <div className="placeholder-content">
            <h2>Discussion</h2>
            <p>To be implemented</p>
        </div>
    );
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