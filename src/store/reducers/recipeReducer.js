const defaultState = {
  allRecipes: [
    {
      name: 'Pancakes',
      description:
        'The classic wholesome breakfast. Serve with butter, syrup, chocolate chips, blueberries, or whatever else you want!',
      ingredients: [
        { name: 'milk', main: true },
        { name: 'flour', main: true },
        { name: 'eggs', main: true },
        { name: 'baking powder', main: false },
      ],
      time: 30,
    },
    { name: 'Creamy Cajun Pasta', ingredients: [] },
    { name: 'Honey Sesame Chicken', ingredients: [] },
  ],
};

const recipeReducer = (state = defaultState, action) => {
  return state;
};

export default recipeReducer;
