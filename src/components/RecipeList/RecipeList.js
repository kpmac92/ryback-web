import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, i) => (
        <div key={i}>{recipe.name}</div>
      ))}
    </div>
  );
};

export default RecipeList;
