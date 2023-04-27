import React, { useCallback } from 'react';

const RecipeIngredientInputs = ({
  recipeIngredients,
  onIngredientInputChange,
  deleteIngredient,
}) => {
  return recipeIngredients
    ? recipeIngredients.map((recipeIngredient) => (
        <div key={recipeIngredient.tempId} className="form-section">
          <div className="form-input">
            Name:
            <input
              onChange={(e) =>
                onIngredientInputChange(
                  recipeIngredient.tempId,
                  e.target.name,
                  e.target.value
                )
              }
              name="ingredientName"
              defaultValue={recipeIngredient.ingredientName}
            />
          </div>
          <div className="form-input">
            Amount Numerator:{' '}
            <input
              onChange={(e) =>
                onIngredientInputChange(
                  recipeIngredient.tempId,
                  e.target.name,
                  e.target.value
                )
              }
              name="amountNumerator"
              defaultValue={recipeIngredient.amountNumerator}
              type="number"
            />
          </div>
          <div className="form-input">
            Amount Denominator:{' '}
            <input
              onChange={(e) =>
                onIngredientInputChange(
                  recipeIngredient.tempId,
                  e.target.name,
                  e.target.value
                )
              }
              type="number"
              name="amountDenominator"
              defaultValue={recipeIngredient.amountDenominator}
            />
          </div>
          <button
            onClick={() =>
              deleteIngredient(
                recipeIngredient.tempId,
                recipeIngredient.ingredientId
              )
            }
          >
            Delete
          </button>
        </div>
      ))
    : null;
};

export default RecipeIngredientInputs;
