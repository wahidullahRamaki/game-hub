
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuary } from "../App";
import APIClient,{FetchResponse} from "../Services/api-client";

import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games')
 export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform:Platform}[],
    metacritic:number;
    rating_top: number;

}


const useGames = (gameQuary:GameQuary) =>
useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey:['games',gameQuary],
    queryFn:({pageParam=1})=>
    apiClient.getAll({
        params:{
            genres:gameQuary.genre?.id,
             parent_platforms: gameQuary.platform?.id,
             ordering:gameQuary.sortOrder,
             search:gameQuary.searchText,
             page:pageParam
            },
            
    }),
    getNextPageParam:(lastPage, allPages)=>{
         return lastPage.next ? allPages.length+1 : undefined;
    },
    staleTime:24*60*60*1000
    });
   

export default useGames