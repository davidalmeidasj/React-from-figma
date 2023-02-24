import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router';
import moviesReducer, {IMovieReducer} from "../components/Movies/redux/movies.reducer";
import cartReducer, {ICartReducer} from "../modules/cart/redux/cart.reducer";

const rootReducer = (history: History) => combineReducers({
    movies: moviesReducer,
    cart: cartReducer,
    router: connectRouter(history)
})

export interface State {
    cart: ICartReducer
    movies: IMovieReducer
    router: RouterState
}

export default rootReducer