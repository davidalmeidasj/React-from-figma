import axios, {AxiosInstance} from 'axios';
import {API} from "../shared/constants";

class MainService {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create(this.getConfig());
    }

    get = (path: string, params: any = {}) => this.axios.get(path, params);

    getConfig() {
        return {
            baseURL: API,
            headers: this.defaultHeaders(),
        };
    }

    defaultHeaders = () => ({
        'Content-Type': 'application/json',
    });


}

export default MainService;
