import React from 'react';
import { addItem, deleteItem, updateItem } from '../../../util/listUtils';
import './InstructionInputs.scss';
import InstructionIngredientCard from './InstructionIngredientCard';

const InstructionInputs = ({
  instructionList,
  ingredientList,
  setInstructionList,
}) => {
  const addInstruction = () => {
    setInstructionList(addItem(instructionList));
  };

  const onInstructionInputChange = (tempId, key, newValue) => {
    setInstructionList(updateItem(instructionList, tempId, key, newValue));
  };

  const deleteInstruction = (tempId) => {
    setInstructionList(deleteItem(instructionList, tempId));
  };

  const deleteInstructionIngredient = (ingredientTempId, instructionTempId) => {
    //todo: add find to list utils
    const instruction = instructionList.find(
      (instruction) => instruction.tempId === instructionTempId
    );

    const updatedIngredientList = deleteItem(
      instruction.ingredients,
      ingredientTempId
    );

    setInstructionList(
      updateItem(
        instructionList,
        instructionTempId,
        'ingredients',
        updatedIngredientList
      )
    );
  };

  const addIngredientToInstruction = (instructionTempId, ingredientTempId) => {
    const instruction = instructionList.find(
      (instruction) => instruction.tempId === instructionTempId
    );

    const ingredient = ingredientList.find(
      (ingredient) => ingredient.tempId === ingredientTempId
    );

    const updatedInstruction = {
      ...instruction,
      ingredients: instruction.ingredients
        ? [
            ...instruction.ingredients,
            { name: ingredient.ingredientName, tempId: ingredient.tempId },
          ]
        : [{ name: ingredient.ingredientName, tempId: ingredient.tempId }],
    };

    const filteredList = instructionList.filter(
      (i) => i.tempId != instructionTempId
    );

    setInstructionList([...filteredList, updatedInstruction]);
  };

  return (
    <div className="instruction-inputs">
      <h3>Instructions</h3>
      {instructionList
        ? instructionList.map((instruction) => (
            <div key={instruction.tempId} className="form-section">
              <div className="form-input">
                <input
                  name="beforeText"
                  defaultValue={instruction.text}
                  onChange={(e) =>
                    onInstructionInputChange(
                      instruction.tempId,
                      e.target.name,
                      e.target.value
                    )
                  }
                />
              </div>
              {instruction.ingredients?.map((ingredient) => (
                <InstructionIngredientCard
                  key={ingredient.tempId}
                  ingredientName={ingredient.name}
                  onDelete={() =>
                    deleteInstructionIngredient(
                      ingredient.tempId,
                      instruction.tempId
                    )
                  }
                />
              ))}
              <div className="form-input">
                <input
                  name="afterText"
                  defaultValue={instruction.text}
                  onChange={(e) =>
                    onInstructionInputChange(
                      instruction.tempId,
                      e.target.name,
                      e.target.value
                    )
                  }
                />
              </div>
              <button onClick={() => deleteInstruction(instruction.tempId)}>
                Delete
              </button>
              <div className="form-input">
                Ingredients:
                <select
                  defaultValue=""
                  name="ingredients"
                  onChange={(e) =>
                    addIngredientToInstruction(
                      instruction.tempId,
                      parseInt(e.target.value)
                    )
                  }
                >
                  <option disabled></option>
                  {ingredientList.map((ingredient) => (
                    <option key={ingredient.tempId} value={ingredient.tempId}>
                      {ingredient.ingredientName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))
        : null}
      <button onClick={() => addInstruction()}>Add Instruction</button>
    </div>
  );
};

export default InstructionInputs;
