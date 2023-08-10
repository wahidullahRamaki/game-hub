import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import  Screenshot  from "../entities/Screenshot";


const useScreenshots =(gameId:number)=> {
    const apiClinet=new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
     return useQuery({
        queryKey:['screenshots',gameId],
        queryFn: apiClinet.getAll
    })
}
export default useScreenshots;