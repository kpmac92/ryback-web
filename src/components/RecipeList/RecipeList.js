import React from 'react';
import './RecipeList.scss';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, i) => (
        <div key={i}>{recipe.name}</div>
      ))}
    </div>
  );
};

export default RecipeList;
