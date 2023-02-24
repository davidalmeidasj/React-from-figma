import {IMovie} from "../../../interfaces/product";
import {IAction} from "../../../interfaces/redux-interface";
import {
    ADD_TO_CART,
    DECREMENT_QUANTITY_TO_CART,
    EDIT_QUANTITY_TO_CART,
    INCREMENT_QUANTITY_TO_CART,
    REMOVE_MOVIE_FROM_CART, RESET_CART
} from "./type";

export interface ICartReducer {
    list: IMovie[]
}

export const initialState = {
    list: []
};

function cartReducer(state: ICartReducer = initialState, action: IAction) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        ...action.payload.movie,
                        quantity: 1
                    }
                ]
            }
        case EDIT_QUANTITY_TO_CART:
            return {
                ...state,
                list: state.list.map((movie) => {
                    if (movie.id === action.payload.id) {
                        return {
                            ...movie,
                            quantity: parseInt(action.payload.quantity) || 1,
                        };
                    }
                    return movie;
                }),
            };
        case INCREMENT_QUANTITY_TO_CART:
            return {
                ...state,
                list: state.list.map((movie) => {
                    if (movie.id === action.payload.id) {
                        return {
                            ...movie,
                            quantity: movie.quantity + 1,
                        };
                    }
                    return movie;
                }),
            };
        case DECREMENT_QUANTITY_TO_CART:
            return {
                ...state,
                list: state.list.map((movie) => {
                    if (movie.id === action.payload.id) {

                        const result = movie.quantity - 1;

                        return {
                            ...movie,
                            quantity: result || 1,
                        };
                    }
                    return movie;
                }),
            };
        case REMOVE_MOVIE_FROM_CART:
            return {
                ...state,
                list: state.list.filter((movie) => movie.id !== action.payload.id),
            };
        case RESET_CART:
            return {
                ...initialState,
            };
        default:
            return state
    }
}

export default cartReducer