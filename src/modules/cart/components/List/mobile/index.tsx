import styled from "styled-components";
import React, {useContext} from "react";
import EmptyCartList from "../../EmptyList";
import {IMovie} from "../../../../../interfaces/product";
import ItemMobile from "../../Item/mobile";
import FooterMobile from "../../Footer/mobile";
import {down} from "styled-breakpoints";
import ContextCart from "../../../context/ContextCart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 32px;

  width: 90%;
  min-height: calc(100vh - 110px);
  margin: 98px 5px 5px 5px;

  background: #FFFFFF;
  border-radius: 4px;
  justify-content: space-between;

  ${down("sm")} {
    width: 96%;
  }
`;

const CartListMobile = () => {

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
            {cart.list.map((movie: IMovie) => (
                <>
                    <ItemMobile
                        key={movie.id}
                        movie={movie}
                        onClickPlus={() => incrementMovieInCart(movie.id)}
                        onClickMinus={() => decrementMovieInCart(movie.id)}
                        onRemove={() => removeMovieFromCart(movie.id)}
                        editQuantity={(quantity: number) => editQuantityMovieInCart(movie.id, quantity)}
                    />
                </>
            ))}

            <FooterMobile total={getTotalPriceAllMoviesInCart}/>
        </Container>
    );
};

export default CartListMobile;