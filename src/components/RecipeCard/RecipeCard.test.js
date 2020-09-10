import React from 'react';
import RecipeCard from './RecipeCard';
import { render } from '@testing-library/react';

describe('RecipeCard', () => {
  const recipe = {
    name: 'Posca',
    ingredients: [
      { name: 'water', main: true },
      { name: 'vinegar', main: true },
      { name: 'herbs', main: false },
    ],
    description: 'An ancient Roman energy drink',
    time: 30,
  };

  it('renders recipe title', () => {
    const { getByText } = render(<RecipeCard recipe={recipe} />);

    expect(getByText('Posca')).toBeInTheDocument();
  });

  it('renders the main ingredients', () => {
    const { getByText, queryByText } = render(<RecipeCard recipe={recipe} />);

    expect(getByText('water')).toBeInTheDocument();
    expect(getByText('vinegar')).toBeInTheDocument();
    expect(queryByText('herbs')).not.toBeInTheDocument();
  });

  it('renders the recipe description', () => {
    const { getByText } = render(<RecipeCard recipe={recipe} />);

    expect(getByText('An ancient Roman energy drink')).toBeInTheDocument();
  });

  it('renders the recipe time', () => {
    const { getByText } = render(<RecipeCard recipe={recipe} />);

    expect(getByText('30 minutes')).toBeInTheDocument();
  });
});
