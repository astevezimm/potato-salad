import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {campaignStatsActions} from "../store/campaignStats";

export default function useStatAutoRefresh() {
    const [_, reset] = useState();
    
    useEffect(() => {
        const timeout = setTimeout(fetchStats, 5000);
        return () => clearTimeout(timeout);
    });

    async function fetchStats() {
        await fetch("/api/stats.js")
            .then((response) => response.json())
            .then((data) => useDispatch()(campaignStatsActions.update(data)));
        reset(null);
    }
}