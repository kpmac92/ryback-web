import React from 'react';

const RecipeIngredientInputs = ({
  recipeIngredients,
  onIngredientInputChange,
}) => {
  return recipeIngredients
    ? recipeIngredients.map((recipeIngredient) => (
        <div key={recipeIngredient.tempId} className="recipe-ingredient">
          <div className="input-section">
            Name:{' '}
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
          <div className="input-section">
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
          <div className="input-section">
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
        </div>
      ))
    : null;
};

export default RecipeIngredientInputs;