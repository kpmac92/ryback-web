import React from 'react';

const InstructionIngredientCard = ({ ingredientName, onDelete }) => {
  return (
    <div className="instruction-ingredient-card">
      {ingredientName}
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default InstructionIngredientCard;
