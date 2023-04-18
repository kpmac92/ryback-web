import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.scss';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    data = fetch('http://localhost:8080/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  };

  useEffect(fetchRecipes, []);

  return (
    <div className="recipe-list">
      {recipes?.map((recipe, i) => (
        <RecipeCard key={i} recipe={recipe} refetch={fetchRecipes} />
      ))}
    </div>
  );
};

export default RecipeList;
