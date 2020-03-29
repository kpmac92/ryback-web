import NavBar from './NavBar';
import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('renders app title', () => {
    const { getByText } = render(<NavBar />);

    expect(getByText('Ryback')).toBeInTheDocument();
  });
});
