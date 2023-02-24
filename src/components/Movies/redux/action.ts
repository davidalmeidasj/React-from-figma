import {IMovie} from "../../../interfaces/product";
import {FETCH_MOVIES, LOADING_CONTROL_MOVIES, RESET_MOVIES, SEED_MOVIES} from "./type";

export const seedMoviesList = () => {
    return {
        type: SEED_MOVIES,
    };
};

export const fetchMovieList = (list: IMovie[]) => {
    return {
        type: FETCH_MOVIES,
        payload: {
            list,
        }
    };
};

export const loading = (status: boolean) => {
    return {
        type: LOADING_CONTROL_MOVIES,
        payload: {
            status
        }
    };
};

export const resetMovies = () => {
    return {
        type: RESET_MOVIES,
    };
};