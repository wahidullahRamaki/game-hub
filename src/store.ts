import { create } from "zustand";

 interface GameQuary {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }
interface GameQueryStore{
 gameQuery:GameQuary;
 setSearchText:(searchText:string)=>void;
 setGenreId:(genreId:number)=>void;
 setPlatformId:(platformId:number)=>void;
 setSortOrder:(sortOrder:string)=>void;
}
const useQueryGameStore=create<GameQueryStore>(set=>({
    gameQuery:{},
    setSearchText:(searchText)=> set(()=>({gameQuery:{searchText}})),
    setGenreId:(genreId)=>set(store=>({gameQuery:{...store.gameQuery,genreId}})),
    setPlatformId:(platformId)=>set(store=>({gameQuery:{...store.gameQuery,platformId}})),
    setSortOrder:(sortOrder)=>set(store=>({gameQuery:{...store.gameQuery,sortOrder}}))


}))
export default useQueryGameStore;