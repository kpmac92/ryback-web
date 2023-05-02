import React, { useCallback } from 'react';

const InstructionInputs = ({
  instructionList,
  ingredientList,
  setInstructionList,
}) => {
  const addInstruction = useCallback(() => {
    const maxTempId = instructionList.reduce(
      (previous, current) =>
        current.tempId > previous ? current.tempId : previous,
      0
    );

    const newInstruction = {
      tempId: maxTempId + 1,
    };

    setInstructionList([...instructionList, newInstruction]);
  }, [instructionList, setInstructionList]);

  const onInstructionInputChange = (tempId, key, newValue) => {};

  const addIngredientToInstruction = (instructionTempId, ingredientTempId) => {
    const instruction = instructionList.find(
      (instruction) => instruction.tempId === instructionTempId
    );

    const ingredient = ingredientList.find((ingredient) => {
      console.log(ingredient);
      return ingredient.tempId === ingredientTempId;
    });

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
    <div>
      {instructionList
        ? instructionList.map((instruction) => (
            <div key={instruction.tempId} className="form-section">
              <div className="form-input">
                Text: <input name="text" defaultValue={instruction.text} />
              </div>
              {instruction.ingredients?.map((ingredient) => (
                <>{ingredient.name}</>
              ))}
              <div className="form-input">
                Ingredients:{' '}
                <select
                  name="ingredients"
                  onChange={(e) =>
                    addIngredientToInstruction(
                      instruction.tempId,
                      parseInt(e.target.value)
                    )
                  }
                >
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
