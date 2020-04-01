import React from 'react';
import './RecipeCard.scss';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">{recipe.name}</div>
);

export default RecipeCard;
