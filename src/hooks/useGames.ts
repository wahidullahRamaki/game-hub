
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient, { FetchResponse } from "../Services/api-client";

import useQueryGameStore from "../store";
import  Game from "../entities/Game";

const apiClient = new APIClient<Game>('/games')
const useGames = () =>{
    const gameQuary=useQueryGameStore(s=>s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey:['games',gameQuary],
        queryFn:({pageParam=1})=>
        apiClient.getAll({
            params:{
                genres:gameQuary.genreId,
                 parent_platforms: gameQuary.platformId,
                 ordering:gameQuary.sortOrder,
                 search:gameQuary.searchText,
                 page:pageParam
                },
                
        }),
        getNextPageParam:(lastPage, allPages)=>{
             return lastPage.next ? allPages.length+1 : undefined;
        },
        staleTime:ms('24h')
        });
}

   

export default useGames