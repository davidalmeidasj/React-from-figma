import React from 'react';
import {IMovie} from "../../../../interfaces/product";
import styled from "styled-components";
import ButtonMarketplace from "../../../ButtonMarketplace";

interface IMoviewProps {
    movie: IMovie,
    quantityMoviesAddedInCart: number,
    onClickToAddInCart: (movie: IMovie) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 11px;
  gap: 9px;
  width: 309.33px;
  height: 305px;
  margin-top: 16px;
  background: #FFFFFF;
  border-radius: 4px;
`;

const MovieCover = styled.img`
  width: 147px;
  height: 188px;
`;

const MovieTitle = styled.span`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #333333;
`;

const MoviePrice = styled.span`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #2F2E41;
`;

const Movie = (props: IMoviewProps) => {
    const {movie, onClickToAddInCart, quantityMoviesAddedInCart} = props;
    return (
        <Container>

            <MovieCover src={movie.image} alt="Product Image"/>
            <MovieTitle>{movie.title}</MovieTitle>
            <MoviePrice>{
                movie.price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })
            }</MoviePrice>
            <ButtonMarketplace title={quantityMoviesAddedInCart ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'} quantity={quantityMoviesAddedInCart} onClick={() => !quantityMoviesAddedInCart && onClickToAddInCart(movie)}/>
        </Container>
    );
};

export default Movie
