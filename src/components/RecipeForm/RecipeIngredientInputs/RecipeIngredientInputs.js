import React from 'react';
import { updateItem, deleteItem } from '../../../util/listUtils';
import './RecipeIngredientInputs.scss';

const RecipeIngredientInputs = ({
  ingredientList,
  setIngredientList,
  recipeId,
}) => {
  const onIngredientInputChange = (tempId, key, newValue) => {
    setIngredientList(updateItem(ingredientList, tempId, key, newValue));
  };

  const addIngredient = () => {
    setIngredientList(addItem(ingredientList));
  };

  const deleteIngredient = (tempId, ingredientId) => {
    setIngredientList(deleteItem(ingredientList, tempId));

    if (ingredientId) {
      body = {
        ingredientId: ingredientId,
        recipeId: recipeId,
      };

      fetch('http://localhost:8080/recipeIngredient', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    }
  };

  return (
    <div className="ingredient-inputs">
      <h3>Ingredients</h3>
      {ingredientList
        ? ingredientList.map((recipeIngredient) => (
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
                Amount Numerator:
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
                Amount Denominator:
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
              <div className="form-input">
                Main Ingredient
                <input
                  onChange={(e) =>
                    onIngredientInputChange(
                      recipeIngredient.tempId,
                      e.target.name,
                      e.target.value
                    )
                  }
                  type="checkbox"
                  name="isPrimary"
                  defaultValue={recipeIngredient.isPrimary}
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
        : null}
      <button onClick={addIngredient}>Add Ingredient</button>
    </div>
  );
};

export default RecipeIngredientInputs;
