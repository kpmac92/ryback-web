import RecipeList from './RecipeList';
import React, { useState, useEffect } from 'react';

const RecipeListConnector = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    data = fetch('http://localhost:8080/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  };

  useEffect(fetchRecipes, []);

  return <RecipeList recipes={recipes} fetchRecipes={fetchRecipes} />;
};

export default RecipeListConnector;
