import {createContext} from 'react';
import {IMovieReducer} from "../../../components/Movies/redux/movies.reducer";
import {ICartReducer} from "../redux/cart.reducer";

type ContextCartType = {
    movies: IMovieReducer,
    cart: ICartReducer,
    goToHome: () => void,
    goToCheckout: () => void,
    incrementMovieInCart: (id: number) => void,
    decrementMovieInCart: (id: number) => void,
    removeMovieFromCart: (id: number) => void,
    editQuantityMovieInCart: (id: number, quantity: number) => void
};

const ContextCart = createContext<ContextCartType>(null as any);

export default ContextCart;
