import { render } from '@testing-library/react';
import RecipeList from './RecipeList';
import React from 'react';

describe('RecipeList', () => {
  it('renders recipes passed to it', () => {
    const recipes = [{ name: 'some delicious food' }, { name: 'some ok food' }];

    const { getByText } = render(<RecipeList recipes={recipes} />);

    expect(getByText('some delicious food')).toBeInTheDocument();
  });
});
