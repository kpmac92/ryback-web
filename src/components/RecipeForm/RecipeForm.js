import React, { useEffect, useState } from 'react';
import './RecipeForm.scss';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeIngredientInputs from './RecipeIngredientInputs/RecipeIngredientInputs';

const RecipeForm = () => {
  const [formInput, setFormInput] = useState({});
  const [ingredientList, setIngredientList] = useState([]);
  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (recipeId) {
      fetch(`http://localhost:8080/recipes/${recipeId}`)
        .then((response) => response.json())
        .then((data) => {
          setFormInput({
            name: data.name,
            description: data.description,
            time: data.time,
          });

          setIngredientList(
            data.recipeIngredients.map((ingredient, i) => {
              return { ...ingredient, tempId: i };
            })
          );
        });
    }
  }, [recipeId]);

  const onSubmit = () => {
    const body = {
      id: recipeId,
      name: formInput.name,
      description: formInput.description,
      time: formInput.time,
      recipeIngredients: ingredientList,
    };

    fetch('http://localhost:8080/recipes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(() => navigate('/'));
  };

  const onInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const onIngredientInputChange = (tempId, key, newValue) => {
    const ingredient = ingredientList.find(
      (ingredient) => ingredient.tempId === tempId
    );

    const updatedIngredient = { ...ingredient, [key]: newValue };

    const filteredList = ingredientList.filter((i) => i.tempId != tempId);

    setIngredientList([...filteredList, updatedIngredient]);
  };

  return (
    <div className="recipe-form">
      <div className="input-section">
        Name:{' '}
        <input
          name="name"
          defaultValue={formInput.name}
          onChange={onInputChange}
        />
      </div>
      <div className="input-section">
        description:{' '}
        <input
          name="description"
          defaultValue={formInput.description}
          onChange={onInputChange}
        />
      </div>
      <div className="input-section">
        time:{' '}
        <input
          name="time"
          defaultValue={formInput.time}
          onChange={onInputChange}
        />
      </div>
      <h3>Ingredients</h3>
      <RecipeIngredientInputs
        recipeIngredients={ingredientList}
        onIngredientInputChange={onIngredientInputChange}
      />

      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default RecipeForm;
