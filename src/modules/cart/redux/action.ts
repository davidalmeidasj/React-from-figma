import {IMovie} from "../../../interfaces/product";
import {
    ADD_TO_CART,
    DECREMENT_QUANTITY_TO_CART,
    EDIT_QUANTITY_TO_CART,
    INCREMENT_QUANTITY_TO_CART,
    REMOVE_MOVIE_FROM_CART, RESET_CART
} from "./type";

export const addToCart = (movie: IMovie) => {
    return {
        type: ADD_TO_CART,
        payload: {
            movie,
        }
    };
};

export const editQuantityMovieInCart = (id: number, quantity: number) => {
    return {
        type: EDIT_QUANTITY_TO_CART,
        payload: {
            id,
            quantity
        }
    };
};

export const incrementMovieInCart = (id: number) => {
    return {
        type: INCREMENT_QUANTITY_TO_CART,
        payload: {
            id,
        }
    };
};

export const decrementMovieInCart = (id: number) => {
    return {
        type: DECREMENT_QUANTITY_TO_CART,
        payload: {
            id,
        }
    };
};

export const removeMovieFromCart = (id: number) => {
    return {
        type: REMOVE_MOVIE_FROM_CART,
        payload: {
            id,
        }
    };
};

export const resetCart = () => {
    return {
        type: RESET_CART
    };
};