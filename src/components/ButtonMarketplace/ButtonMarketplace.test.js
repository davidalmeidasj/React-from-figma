import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonMarketplace from "./index";

describe('ButtonMarketplace', () => {
    it('renders with correct text and style', () => {
        const { getByText } = render(<ButtonMarketplace title="Add to cart" quantity={1} />);
        expect(getByText('Add to cart')).toBeInTheDocument();
        expect(getByText('1')).toHaveStyle(`
      color: #FFFFFF;
    `);
    });

    it('calls onClick function when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<ButtonMarketplace title="Add to cart" quantity={1} onClick={handleClick} />);
        fireEvent.click(getByText('Add to cart'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
