import fetchStats from "../../database/data";

export default async function handler(req, res) {
    res.status(200).send(fetchStats());
}