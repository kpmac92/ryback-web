import React, { useEffect, useState } from 'react';
import './RecipeForm.scss';
import { useParams } from 'react-router-dom';

const RecipeForm = () => {
  const [formInput, setFormInput] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    if (recipeId) {
      fetch(`http://localhost:8080/recipes/${recipeId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFormInput({ name: data.name, description: data.description });
        });
    }
  }, [recipeId]);

  const onSubmit = () => {
    const body = {
      id: recipeId,
      name: formInput.name,
      description: formInput.description,
    };

    fetch('http://localhost:8080/recipes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  const onInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
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

      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default RecipeForm;
