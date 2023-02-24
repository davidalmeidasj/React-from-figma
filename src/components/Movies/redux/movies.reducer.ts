import {FETCH_MOVIES, LOADING_CONTROL_MOVIES, RESET_MOVIES} from "./type";
import {IMovie} from "../../../interfaces/product";
import {IAction} from "../../../interfaces/redux-interface";

export interface IMovieReducer {
    list: IMovie[];
    loading: boolean;
}

export const initialState = {
    list: [],
    loading: false
};

function moviesReducer(state: IMovieReducer = initialState, action: IAction) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                list: action.payload.list
            }
        case LOADING_CONTROL_MOVIES:
            return {
                ...state,
                loading: action.payload.status
            }
        case RESET_MOVIES:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default moviesReducer