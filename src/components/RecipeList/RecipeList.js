import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.scss';

const RecipeList = ({ recipes, fetchRecipes }) => {
  return (
    <div className="recipe-list">
      {recipes?.map((recipe, i) => (
        <RecipeCard key={i} recipe={recipe} refetch={fetchRecipes} />
      ))}
    </div>
  );
};

export default RecipeList;
