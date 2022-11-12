import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.scss';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    data = fetch('http://localhost:8080/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="recipe-list">
      {recipes?.map((recipe, i) => (
        <RecipeCard key={i} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
