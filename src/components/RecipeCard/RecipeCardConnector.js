import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeCardConnector = ({ recipe, refetch }) => {
  const deleteRecipe = (id) => {
    fetch('http://localhost:8080/recipes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then(() => refetch());
  };

  return <RecipeCard recipe={recipe} deleteRecipe={deleteRecipe} />;
};

export default RecipeCardConnector;
