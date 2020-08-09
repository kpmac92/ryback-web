import React from 'react';
import './RecipeCard.scss';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <span className="recipe-title">{recipe.name}</span>
    <div className="horiz-flex-container">
      <div className="description-container">
        <span className="description">{recipe.description}</span>
      </div>
      <div className="ingredient-container">
        <ul>
          {recipe.ingredients.map((ingredient, i) =>
            ingredient.main ? <li key={i}>{ingredient.name}</li> : null
          )}
        </ul>
      </div>
    </div>
  </div>
);

export default RecipeCard;
