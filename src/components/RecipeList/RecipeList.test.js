import { render } from '@testing-library/react';
import RecipeList from './RecipeList';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('RecipeList', () => {
  it('renders recipes passed to it', () => {
    const recipes = [
      { name: 'some delicious food', ingredients: [] },
      { name: 'some ok food', ingredients: [] },
    ];

    const { getByText } = render(<RecipeList recipes={recipes} />, {
      wrapper: BrowserRouter,
    });

    expect(getByText('some delicious food')).toBeInTheDocument();
  });
});
