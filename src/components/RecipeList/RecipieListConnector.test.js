import RecipeListConnector from './RecipeListConnector';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';

describe('RecipieListConnector', () => {
  it('renders recipe list with recipes in store', () => {
    const state = {
      recipe: {
        allRecipes: [
          { name: 'Wampa Soup', ingredients: [] },
          { name: 'Mynock Kababs', ingredients: [] },
        ],
      },
    };
    const mockStore = configureStore()(state);

    const { getByText } = render(
      <Provider store={mockStore}>
        <RecipeListConnector />
      </Provider>
    );

    expect(getByText('Wampa Soup')).toBeInTheDocument();
  });
});
