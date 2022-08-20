export default function StretchGoals() {
    return <h1>Stretch Goals</h1>
}

export function getStaticProps() {
    return {
        props: {
            pageTitle: "Stretch Goals"
        },
        //revalidate: 5
    };
}