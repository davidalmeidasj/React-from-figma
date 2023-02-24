import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContextCart from '../../context/ContextCart';
import { EmptyCartList } from './';

describe('EmptyCartList', () => {
    const goToHomeMock = jest.fn();

    const renderComponent = () =>
        render(
            <ContextCart.Provider value={{ goToHome: goToHomeMock }}>
                <EmptyCartList />
            </ContextCart.Provider>
        );

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the component', () => {
        const { getByText, getByAltText } = renderComponent();

        expect(getByText('Parece que não há nada por aqui :(')).toBeInTheDocument();
        expect(getByText('VOLTAR')).toBeInTheDocument();
    });

    it('should call goToHome when button is clicked', () => {
        const { getByText } = renderComponent();

        fireEvent.click(getByText('VOLTAR'));

        expect(goToHomeMock).toHaveBeenCalled();
    });
});
