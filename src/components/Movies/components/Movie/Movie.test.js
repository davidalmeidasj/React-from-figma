import React from 'react';
import { shallow } from 'enzyme';
import Movie from './index';

describe('Movie component', () => {
    const movie = {
        id: 1,
        title: 'Movie Title',
        price: 9.99,
        image: 'movie-cover.png',
    };

    const props = {
        movie,
        quantityMoviesAddedInCart: 0,
        onClickToAddInCart: jest.fn(),
    };

    it('should call onClickToAddInCart when button is clicked', () => {
        const wrapper = shallow(<Movie {...props} />);
        wrapper.find('ButtonMarketplace').simulate('click');
        expect(props.onClickToAddInCart).toHaveBeenCalledWith(movie);
    });

    it('should render the button with the correct title when quantityMoviesAddedInCart is 0', () => {
        const wrapper = shallow(<Movie {...props} />);
        expect(wrapper.find('ButtonMarketplace').prop('title')).toEqual('ADICIONAR AO CARRINHO');
    });

    it('should render the button with the correct title when quantityMoviesAddedInCart is greater than 0', () => {
        const wrapper = shallow(<Movie {...props} quantityMoviesAddedInCart={1} />);
        expect(wrapper.find('ButtonMarketplace').prop('title')).toEqual('ITEM ADICIONADO');
    });
});
