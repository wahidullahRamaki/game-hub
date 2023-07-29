import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count:number;
    results: T[]

}
const axiosInstance = axios.create({

    baseURL: 'https://api.rawg.io/api',
    params: {

        key: 'ecb7959aee884948802a9fef3f6be488'
    }
});
class APIClient<T>{
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint=endpoint;
    }
     getAll=(config:AxiosRequestConfig)=>{
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res=>res.data);
     }
}
export default APIClient;