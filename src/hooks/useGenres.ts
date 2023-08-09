import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient from "../Services/api-client";
import genres from "../data/genres";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = ()=>
useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialdata: genres
});

export default useGenres