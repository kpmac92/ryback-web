import NavBar from './NavBar';
import { render } from '@testing-library/react';
import React from 'react';

describe('NavBar', () => {
  it('renders app title', () => {
    const { getByText } = render(<NavBar />);

    expect(getByText('Ryback')).toBeInTheDocument();
  });
});
