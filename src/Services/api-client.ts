import axios from "axios";

export interface FetchResponse<T>{
    count:number;
    results: T[]

}
export default axios.create({

    baseURL: 'https://api.rawg.io/api',
    params: {

        key: 'ecb7959aee884948802a9fef3f6be488'
    }
})