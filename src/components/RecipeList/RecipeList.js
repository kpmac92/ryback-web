import React from 'react';
import RecipeCardConnector from '../RecipeCard/RecipeCardConnector';
import './RecipeList.scss';

const RecipeList = ({ recipes, fetchRecipes }) => {
  return (
    <div className="recipe-list">
      {recipes?.map((recipe, i) => (
        <RecipeCardConnector key={i} recipe={recipe} refetch={fetchRecipes} />
      ))}
    </div>
  );
};

export default RecipeList;
