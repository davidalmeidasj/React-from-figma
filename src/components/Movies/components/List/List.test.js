import React from 'react';
import { shallow } from 'enzyme';
import { Movies } from './index';

describe('Movies component', () => {
    let props;
    let mountedMovies;

    const movies = () => {
        if (!mountedMovies) {
            mountedMovies = shallow(
                <Movies {...props} />
            );
        }
        return mountedMovies;
    }

    beforeEach(() => {
        props = {
            movies: {
                list: []
            },
            cart: {
                list: []
            },
            moveMovieToCart: jest.fn(),
            seedMovies: jest.fn(),
        };
        mountedMovies = undefined;
    });

    it('should render LoadingScreen component', () => {
        const loadingScreen = movies().find('LoadingScreen');
        expect(loadingScreen.length).toBe(1);
    });

    describe('when the movies list is not empty', () => {
        beforeEach(() => {
            props.movies.list = [
                { id: 1, title: 'Movie 1' },
                { id: 2, title: 'Movie 2' },
            ];
        });

        it('should render Movie components', () => {
            const movieComponents = movies().find('Movie');
            expect(movieComponents.length).toBe(props.movies.list.length);
        });

        it('should pass the correct props to Movie components', () => {
            const movieComponent = movies().find('Movie').first();
            expect(movieComponent.prop('movie')).toBe(props.movies.list[0]);
            expect(movieComponent.prop('quantityMoviesAddedInCart')).toBe(0);
            expect(movieComponent.prop('onClickToAddInCart')).toBe(props.moveMovieToCart);
        });

        describe('when a movie is in the cart', () => {
            beforeEach(() => {
                props.cart.list = [{ id: 1, quantity: 1 }];
            });

            it('should pass the correct quantity to Movie component', () => {
                const movieComponent = movies().find('Movie').first();
                expect(movieComponent.prop('quantityMoviesAddedInCart')).toBe(1);
            });
        });
    });
});
