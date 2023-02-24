import React from 'react';
import Header from "../../components/Header";
import CartList from "./components/List";
import {isMobile} from "../../shared/utils";
import CartListMobile from "./components/List/mobile";
import ContextCart from "./context/ContextCart";
import {State} from "../../reducers";
import {Dispatch} from "redux";
import {decrementMovieInCart, editQuantityMovieInCart, incrementMovieInCart, removeMovieFromCart} from "./redux/action";
import {connect} from "react-redux";
import {push} from "connected-react-router";

type PropsFromRedux = MapStateToProps & MapDispatchToProps;

export const Cart: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {

    return (
        <ContextCart.Provider value={props}>
            <Header />
            {isMobile() ? (
                <CartListMobile />
            ) : (
                <CartList />
            )}
        </ContextCart.Provider>
    );
};

const mapStateToProps = (store: State) => {
    return {
        movies: store.movies,
        cart: store.cart,
    };
};

const mapToDispatchToProps = (dispatch: Dispatch) => {
    return {
        incrementMovieInCart: (id: number) => dispatch(incrementMovieInCart(id)),
        decrementMovieInCart: (id: number) => dispatch(decrementMovieInCart(id)),
        removeMovieFromCart: (id: number) => dispatch(removeMovieFromCart(id)),
        editQuantityMovieInCart: (id: number, quantity: number) => dispatch(editQuantityMovieInCart(id, quantity)),
        goToCheckout: () => dispatch(push('/checkout')),
        goToHome: () => dispatch(push('/')),
    };
};

type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = ReturnType<typeof mapToDispatchToProps>;

export default connect(mapStateToProps, mapToDispatchToProps)(Cart)
