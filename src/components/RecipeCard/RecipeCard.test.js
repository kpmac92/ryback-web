import React from 'react';
import RecipeCard from './RecipeCard';
import { render } from '@testing-library/react';

describe('RecipeCard', () => {
  it('renders recipe title', () => {
    const recipe = { name: 'Posca' };

    const { getByText } = render(<RecipeCard recipe={recipe} />);

    expect(getByText('Posca')).toBeInTheDocument();
  });
});
