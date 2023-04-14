import React from 'react';
import './RecipeCard.scss';

const deleteRecipe = (id) => {
  fetch('http://localhost:8080/recipes/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  });
  //TODO: refetch recipe list after delete
};

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <div className="card-header">
      <span className="recipe-title">{recipe.name}</span>
      <span className="recipe-time">{recipe.time} minutes</span>
    </div>
    <div className="horiz-flex-container">
      <div className="description-container">
        <span className="description">{recipe.description}</span>
      </div>
      <div className="ingredient-container">
        <span>Main Ingredients: </span>
        <ul>
          {recipe.ingredients?.map((ingredient, i) =>
            ingredient.main ? <li key={i}>{ingredient.name}</li> : null
          )}
        </ul>
        <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
      </div>
    </div>
  </div>
);

export default RecipeCard;
