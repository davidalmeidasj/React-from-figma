import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from "./index";

describe('Button', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toHaveStyle(`
      width: 287.33px;
      background: #009EDD;
    `);
    });

    it('calls onClick function when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
        fireEvent.click(getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});