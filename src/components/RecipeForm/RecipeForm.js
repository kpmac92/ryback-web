import React, { useCallback, useEffect, useState } from 'react';
import './RecipeForm.scss';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeIngredientInputs from './RecipeIngredientInputs/RecipeIngredientInputs';
import InstructionInputs from './InstructionInputs/InstructionInputs';
import { addItem, deleteItem, updateItem } from '../../util/listUtils';

const RecipeForm = () => {
  const [formInput, setFormInput] = useState({});
  const [ingredientList, setIngredientList] = useState([]);
  const [instructionList, setInstructionList] = useState([]);
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const fetchRecipeData = useCallback(() => {
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
  }, [recipeId]);

  useEffect(() => {
    if (recipeId) {
      fetchRecipeData();
    }
  }, [recipeId, fetchRecipeData]);

  const onSubmit = () => {
    const body = {
      id: recipeId,
      name: formInput.name,
      description: formInput.description,
      time: formInput.time,
      recipeIngredients: ingredientList,
    };

    fetch('http://localhost:8080/recipes/', {
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

  return (
    <div className="recipe-form">
      <div className="form-section">
        <div className="form-input">
          Name:
          <input
            name="name"
            defaultValue={formInput.name}
            onChange={onInputChange}
          />
        </div>
        <div className="form-input">
          Description:
          <input
            name="description"
            defaultValue={formInput.description}
            onChange={onInputChange}
          />
        </div>
        <div className="form-input">
          Time:
          <input
            name="time"
            defaultValue={formInput.time}
            onChange={onInputChange}
          />
        </div>
      </div>
      <RecipeIngredientInputs
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
        recipeId={recipeId}
      />
      <InstructionInputs
        instructionList={instructionList}
        setInstructionList={setInstructionList}
        ingredientList={ingredientList}
      />

      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default RecipeForm;
