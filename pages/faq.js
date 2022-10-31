import fetchStats from "../database/data";

export default function FAQ() {
    return (
        <div className="placeholder-content">
            <h2>FAQ</h2>
            <p>To be implemented</p>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            pageTitle: "FAQ",
            stats: await fetchStats()
        },
        revalidate: 1
    };
}