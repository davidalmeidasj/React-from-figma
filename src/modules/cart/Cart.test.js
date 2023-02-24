import React from 'react';
import { shallow } from 'enzyme'; // You may need to install this library
import {Cart} from './index';

describe('Cart Component', () => {
    let wrapper;

    beforeEach(() => {
        const props = {
            movies: [],
            cart: [],
            incrementMovieInCart: jest.fn(),
            decrementMovieInCart: jest.fn(),
            removeMovieFromCart: jest.fn(),
            editQuantityMovieInCart: jest.fn(),
            goToCheckout: jest.fn(),
            goToHome: jest.fn(),
        };

        wrapper = shallow(<Cart {...props} />);
    });

    it('should render without errors', () => {
        expect(wrapper.length).toBe(1);
    });

});
