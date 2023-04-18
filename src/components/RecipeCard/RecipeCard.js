import React from 'react';
import './RecipeCard.scss';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, refetch }) => {
  const deleteRecipe = (id) => {
    fetch('http://localhost:8080/recipes/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then(() => refetch());
  };

  return (
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
          <Link to={`editRecipe/${recipe.id}`}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
