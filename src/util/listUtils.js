export const deleteItem = (list, value, key = 'tempId') => {
  return list.filter((item) => item[key] != value);
};

export const updateItem = (
  list,
  idValue,
  fieldKey,
  fieldValue,
  idKey = 'tempId'
) => {
  const item = list.find((item) => item[idKey] === idValue);

  const updatedItem = { ...item, [fieldKey]: fieldValue };

  const filteredList = list.filter((item) => item[idKey] != idValue);

  return [...filteredList, updatedItem].sort((a, b) =>
    a[idKey] >= b[idKey] ? 1 : -1
  );
};

export const addItem = (list, idKey = 'tempId') => {
  const maxId = list.reduce(
    (previous, current) =>
      current[idKey] > previous ? current[idKey] : previous,
    0
  );

  const newItem = {
    [idKey]: maxId + 1,
  };

  return [...list, newItem];
};
