import React, { useState } from 'react';
import './RecipeForm.scss';

const RecipeForm = () => {
  const [formInput, setFormInput] = useState({});

  const onSubmit = () => {
    const body = { name: formInput.name, description: formInput.description };

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
      <div className="input-section" onChange={onInputChange}>
        Name: <input name="name" />
      </div>
      <div className="input-section">
        description: <input name="description" onChange={onInputChange} />
      </div>

      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default RecipeForm;
