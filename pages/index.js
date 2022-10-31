import fetchStats from "../database/data";

export default function HomePage() {
    return (
        <div className="placeholder-content">
            <h2>Description</h2>
            <p>To be implemented</p>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            stats: await fetchStats(),
            //sectBtn: true    
        },
        revalidate: 1
    };
}