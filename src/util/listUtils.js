export const deleteItem = (list, key, value) => {
  return list.filter((item) => item[key] != value);
};
