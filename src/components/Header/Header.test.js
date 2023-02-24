import React from 'react';
import {mount, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {ItemsTitle} from "./styles";
import { createRoot } from 'react-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Header component', () => {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should match snapshot', () => {
        const wrapper = shallow(<Header />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should display the correct number of items in the cart based on Redux state', () => {
        const cart = { list: [{}, {}, {}] };
        const initialState = { cart };
        const store = mockStore(initialState);

        const wrapper = mount(
            <Provider store={store}>
                <Header />
            </Provider>
        );


        createRoot(document.createElement('div')).render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        expect(wrapper.find(ItemsTitle).text()).toEqual('3 items');
    });

});