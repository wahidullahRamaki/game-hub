import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../Services/api-client";

interface Game {
    id: number,
    name: string
}

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    // fatching data from backend
    useEffect(() => {

        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {

                // i put cancelledcallback instead canceledError
                if (err instanceof cancelIdleCallback) return;
                setError(err.message)
            })

        return () => controller.abort();

    }, [])
    return { games, error }

}
export default useGames