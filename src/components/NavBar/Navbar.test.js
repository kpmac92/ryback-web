import NavBar from './NavBar';
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar', () => {
  it('renders app title', () => {
    const { getByText } = render(<NavBar />, {
      wrapper: BrowserRouter,
    });

    expect(getByText('Ryback')).toBeInTheDocument();
  });
});
