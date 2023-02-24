import styled from "styled-components";
import React, {useContext} from "react";
import {IMovie} from "../../../../interfaces/product";
import EmptyCartList from "../EmptyList";
import Header from "../Header";
import Item from "../Item";
import Footer from "../Footer";
import ContextCart from "../../context/ContextCart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;

  width: 960px;
  min-height: 286px;
  margin-top: 98px;

  background: #FFFFFF;
  border-radius: 4px;
`;

const CartList = () => {

    const {
        cart,
        incrementMovieInCart,
        decrementMovieInCart,
        removeMovieFromCart,
        editQuantityMovieInCart
    } = useContext(ContextCart);

    if (!cart.list.length) {
        return (
            <EmptyCartList/>
        );
    }

    const getTotalPriceAllMoviesInCart = cart.list.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

    return (
        <Container>
            <Header/>
            {cart.list.map((movie: IMovie) => (
                <>
                    <Item
                        key={movie.id}
                        movie={movie}
                        onClickPlus={() => incrementMovieInCart(movie.id)}
                        onClickMinus={() => decrementMovieInCart(movie.id)}
                        onRemove={() => removeMovieFromCart(movie.id)}
                        editQuantity={(quantity: number) => editQuantityMovieInCart(movie.id, quantity)}
                    />
                </>
            ))}

            <Footer total={getTotalPriceAllMoviesInCart}/>
        </Container>
    );
};

export default CartList;