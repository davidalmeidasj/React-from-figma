import React, {useEffect} from 'react';
import {IMovie} from "../../../../interfaces/product";
import Movie from "../Movie";
import styled from "styled-components";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {State} from "../../../../reducers";
import {fetchMovieList, seedMoviesList} from "../../redux/action";
import {addToCart} from "../../../../modules/cart/redux/action";
import LoadingScreen from "../../../LoadingScreen";

const Container = styled.div`
  width: 976px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 82px;
`;

type PropsFromRedux = MapStateToProps & MapDispatchToProps;

export const Movies: React.FC<PropsFromRedux> = ({movies, cart, moveMovieToCart, seedMovies}) => {

    useEffect(() => {
        seedMovies();
    }, [seedMovies]);

    const getQuantityMoviesAddedInCartById = (id: number) => {
        const movie = cart.list.filter(movie => movie.id === id)[0];

        if (movie && movie.quantity) {
            return movie.quantity
        }

        return 0;
    }

    return (
        <LoadingScreen isLoading={(!movies.list.length)}>
            <Container>
                {movies.list.map((movie: IMovie) => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                        quantityMoviesAddedInCart={getQuantityMoviesAddedInCartById(movie.id)}
                        onClickToAddInCart={moveMovieToCart}
                    />
                ))}
            </Container>
        </LoadingScreen>
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
        seedMovies: () => dispatch(seedMoviesList()),
        fetchMovies: (list: IMovie[]) => dispatch(fetchMovieList(list)),
        moveMovieToCart: (movie: IMovie) => dispatch(addToCart(movie))
    };
};

type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = ReturnType<typeof mapToDispatchToProps>;

export default connect(mapStateToProps, mapToDispatchToProps)(Movies);
