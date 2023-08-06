import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [apiData, setApiData] = useState([]);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true);
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setIsPending(false);
            setApiData(json);
        };
        fetchData();
    },[url]);
    return { apiData, isPending };
}
