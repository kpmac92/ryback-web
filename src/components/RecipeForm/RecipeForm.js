import React, { useState } from 'react';
import './RecipeForm.scss';

const RecipeForm = () => {
  const onSubmit = () => {
    body = { name: formInput.name, description: formInput.description };
    //todo: call backend
  };

  const [formInput, setFormInput] = useState({});

  const onInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  return (
    <div className="recipe-form">
      <div className="input-section" onChange={onInputChange}>
        Name: <input name="nameInput" />
      </div>
      <div className="input-section">
        description: <input name="descriptionInput" onChange={onInputChange} />
      </div>

      <button onClick={() => console.log(formInput)}>submit</button>
    </div>
  );
};

export default RecipeForm;
