import axios from "axios";

export default axios.create({

    baseURL: 'https://api.rawg.io/api',
    params: {

        key: 'ecb7959aee884948802a9fef3f6be488'
    }
})